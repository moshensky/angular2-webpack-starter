import { Component, OnInit } from '@angular/core';

import { Tree, TreeNode, ContextMenu } from 'primeng/primeng';
import { TreeService } from "../shared/services/tree.service";
import { DocumentService } from "../shared/services/document.service";
import { ContainerService } from "../shared/services/container.service";
import { CustomHttp, EventBroadcaster } from '../shared/utils/index';

@Component({
  moduleId: module.id,
  selector: 'dfs-tree',
  templateUrl: 'dfs-tree.component.html',
  styleUrls: ['dfs-tree.component.css'],
  directives: [Tree, ContextMenu],
  providers: [TreeService, CustomHttp, DocumentService, ContainerService]
})
export class DFSTreeComponent implements OnInit {
  public nodes: TreeNode[] = new Array();
  documentToBeCut: Object;
  documentToBeCopied: Object;
  containerToBeCut: Object;
  containerToBeCopied: Object;
  selectedFile: TreeNode = {};
  displayDeleteDialog: boolean = false;

  contextMenu: any[] = [{
    label: 'New File',
    command: this.createDocument.bind(this)
  }, {
    label: 'Delete File',
    command: this.deleteDocument.bind(this)
  }];

  constructor(private treeService: TreeService,
    private documentService: DocumentService,
    private broadcaster: EventBroadcaster,
    private containerService: ContainerService) {

    this.broadcaster.on('CloseEditDialog').subscribe(this.onEditDialogClose.bind(this));
    this.broadcaster.on('CloseContainerDialog').subscribe(this.onContainerDialogClose.bind(this));
    this.broadcaster.on('CloseEditAccessDialog').subscribe(this.onEditAccessDialogClose.bind(this));
  }

  ngOnInit() {
    this.treeService.getRoot().then(nodes => {
      this.nodes = nodes;
    }
    )
  }

  nodeExpand(event) {
    if (event.node) {
      this.treeService.getTreeNodes(event.node.id).then(nodes => {
        event.node.children = nodes
      });
      // this.treeService.getNodes(event.node.id).subscribe(nodes => event.node.children = nodes);
    }
  }

  nodeContextMenuSelect(event) {
    // Root = 100,
    //   Binder = 200,
    //   Folder = 300,
    //   File = 400

    if (event.node.type === 400) {
      this.contextMenu = [{
        label: 'Редакция',
        icon: 'fa-edit',
        command: this.editDocument.bind(this)
      }, {
        label: 'Изтриване',
        icon: 'fa-trash',
        command: this.deleteDocument.bind(this)
      }, {
        label: 'Изрязване',
        icon: 'fa-cut',
        command: this.cutDocument.bind(this)
      }, {
        label: 'Копиране',
        icon: 'fa-copy',
        command: this.copyDocument.bind(this)
      }];
    } else {
      this.contextMenu = [{
        label: 'Добавяне',
        icon: 'fa-plus',
        items: [{
          label: 'Документ',
          icon: 'fa-file-o',
          command: this.createDocument.bind(this)
        }, {
          label: 'Папка',
          icon: 'fa-folder',
          command: this.createFolder.bind(this)
        }, {
          label: 'Класьор',
          icon: 'fa-folder',
          command: this.createBinder.bind(this)
        }]
      }, {
        label: 'Редакция',
        icon: 'fa-edit',
        command: this.editFolder.bind(this)
      }, {
        label: 'Изтриване',
        icon: 'fa-trash',
        command: this.deleteFolder.bind(this)
      }, {
        label: 'Изрязване',
        icon: 'fa-cut',
        command: this.cutFolder.bind(this)
      }, {
        label: 'Копиране',
        icon: 'fa-copy',
        command: this.copyFolder.bind(this)
      }, {
        label: 'Поставяне',
        icon: 'fa-paste',
        command: this.paste.bind(this)
      }, {
        label: 'Права',
        icon: 'fa-group',
        command: this.editRights.bind(this)
      }];
    }
  }

  nodeDoubleClick(node, nodeLabelInput, event) {
    event.preventDefault();

    //nodeLabelInput.focus();
    node.isEdited = true;
  }

  nodeKeyPress(node, event) {
    const keyName = event.key;

    if (keyName === 'Enter') {
      event.preventDefault();
      node.isEdited = false;
    }
  }

  nodeBlur(node, event) {
    event.preventDefault();
    node.isEdited = false;
  }

  nodeSelect(event) {
    if (event.node.type !== 400) {
      this.broadcaster.broadcast('NodeSelected', event.node.id);
    }
  }

  createDocument() {
    let data = {
      id: undefined,
      parentId: this.selectedFile.id
    };

    this.broadcaster.broadcast('OpenEditDialog', data);
  }

  editDocument() {
    let data = {
      id: this.selectedFile.id,
      parentId: undefined
    };

    this.broadcaster.broadcast('OpenEditDialog', data);
  }

  deleteDocument() {
    this.documentService.deleteDocument(this.selectedFile.id).then(node => {
      let node = this.find(this.nodes, this.selectedFile.parentId);
      this.treeService.getTreeNodes(node.id).then(nodes => {
        node.children = nodes;
      });
    });
  }

  cutDocument() {
    this.documentToBeCut = this.selectedFile;
    this.documentToBeCopied = undefined;
  }

  copyDocument() {
    this.documentToBeCopied = this.selectedFile;
    this.documentToBeCut = undefined;
  }

  pasteDocument() {
    let document = this.documentToBeCut || this.documentToBeCopied;
    let data = {
      id: document.id,
      parentId: this.selectedFile.id
    }
    if (this.documentToBeCut !== undefined) {
      this.documentService.moveDocument(data).then(node => {
        this.documentToBeCut = undefined;
        this.treeService.getTreeNodes(document.parentId).then(nodes => {
          let foundNode = this.find(this.nodes, document.parentId);
          foundNode.children = nodes;
        });
        this.treeService.getTreeNodes(this.selectedFile.id).then(nodes => {
          this.selectedFile.children = nodes;
        });
      });
    } else {
      this.documentService.copyDocument(data).then(node => {
        this.treeService.getTreeNodes(this.selectedFile.id).then(nodes => {
          this.selectedFile.children = nodes;
        });
      })
    }
  };

  pasteContainer(container) {
    let data = {
      id: container.id,
      parentId: this.selectedFile.id
    }
    if (this.containerToBeCut !== undefined) {
      this.containerService.moveContainer(data).then(node => {
        this.containerToBeCut = undefined;
        this.treeService.getTreeNodes(container.parentId).then(nodes => {
          let foundNode = this.find(this.nodes, container.parentId);
          foundNode.children = nodes;
        });
        this.treeService.getTreeNodes(this.selectedFile.id).then(nodes => {
          this.selectedFile.children = nodes;
        });
      });
    } else {
      this.containerService.copyContainer(data).then(node => {
        this.treeService.getTreeNodes(this.selectedFile.id).then(nodes => {
          this.selectedFile.children = nodes;
        });
      })
    }
  }

  createFolder() {
    let data = {
      id: undefined,
      parentId: this.selectedFile.id,
      type: 200
    };
    this.broadcaster.broadcast('OpenContainerDialog', data);
  }

  createBinder() {
    let data = {
      id: undefined,
      parentId: this.selectedFile.id,
      type: 300
    };
    this.broadcaster.broadcast('OpenContainerDialog', data);
  }

  editFolder() {
    let data = {
      id: this.selectedFile.id,
      parentId: undefined
    };

    this.broadcaster.broadcast('OpenContainerDialog', data);
  }

  editRights() {
    let data = {
      containerId: this.selectedFile.id,
      parentId: this.selectedFile.parentId
    };

    this.broadcaster.broadcast('OpenEditAccessDialog', data);
  }

  deleteFolder() {
    this.containerService.deleteContainer(this.selectedFile.id).then(node => {
      let node = this.find(this.nodes, this.selectedFile.parentId);
      this.treeService.getTreeNodes(node.id).then(nodes => {
        node.children = nodes;
      });
    });
  }

  cutFolder() {
    this.containerToBeCut = this.selectedFile;
    this.containerToBeCopied = undefined;
  }

  copyFolder() {
    this.containerToBeCopied = this.selectedFile;
    this.containerToBeCut = undefined;
  }

  paste() {
    let container = this.containerToBeCut || this.containerToBeCopied;
    if (container !== undefined) {
      this.pasteContainer(container);
    }
    else {
      this.pasteDocument();
    }
  }


  find(nodes, id) {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === id) {
        return nodes[i];
      }

      if (nodes[i].children !== undefined) {
        return this.find(nodes[i].children, id);
      }
    }
  }

  onEditDialogClose(data) {
    if (data.id !== undefined) {
      this.treeService.getNode(data.id).then(node => {
        let foundNode = this.find(this.nodes, data.id);

        if (foundNode !== undefined) {
          foundNode.label = node.name;
        }
      });

      if (data.parentId !== undefined) {
        this.treeService.getTreeNodes(data.parentId).then(nodes => {
          this.selectedFile.children = nodes;
        });
      }
    }
  }

  onContainerDialogClose(data) {
    this.containerService.getContainer(data.id).then(node => {
      let foundNode = this.find(this.nodes, data.id);

      if (foundNode !== undefined) {
        foundNode.label = node.name;
      }
    });

    if (data.id !== undefined && data.parentId !== undefined) {
      this.treeService.getTreeNodes(data.parentId).then(nodes => {
        this.selectedFile.children = nodes;
      });
    }
  }

  onEditAccessDialogClose(data) {
    if (data.parentId !== '00000000-0000-0000-0000-000000000000') {
      let parent = this.find(this.nodes, data.parentId);

      this.treeService.getTreeNodes(parent.id).then(nodes => {
        parent.children = nodes;
      });
    } else {
      this.treeService.getRoot().then(nodes => {
        this.nodes = nodes;
      });
    }
  }

  removeFromTree(parent, childIdToRemove) {
    parent[0].children = parent[0].children
      .filter(function (child) {
        return child.id !== childIdToRemove
      })
      .map(function (child) {
        return this.removeFromTree(child, childIdToRemove)
      });
    return parent;
  }
}
