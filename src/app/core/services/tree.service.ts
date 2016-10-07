
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { ApiService } from "./api.service"

// todo: refactore promises out
@Injectable()
export class TreeService {
  constructor(private customHttp: ApiService) { }

  getRoot(): Promise<any> {
    return this.customHttp.get('/nodes')
      .map(response => {
        let nodes = [];
        let node = {
          id: response.id,
          label: response.name,
          leaf: false,
          expandedIcon: "fa-folder-open",
          collapsedIcon: "fa-folder",
          parentId: response.parentId,
          type: response.type
        };
        nodes.push(node);

        return nodes;
      }).toPromise();
  }

  getTreeNodes(id): Promise<any> {
    return this.customHttp.get('/nodes/' + id)
      .map(response => {
        // todo: refactore!!!!
        for (let data of response) {
          data.label = data.name;
          data.leaf = data.isLeaf;
          if (data.type === 400) {
            data.icon = 'fa-file-o'
          }
          else if (data.type === 300) {
            data.expandedIcon = 'fa-folder-open';
            data.collapsedIcon = 'fa-folder';
          }
          else if (data.type === 200) {
            data.expandedIcon = 'fa-folder-open';
            data.collapsedIcon = 'fa-folder';
          } else {
            data.icon = 'fa-archive'
          }
          data.parentId = data.parentId;
        }

        return response;
      }).toPromise();
  }

  getNode(id): Promise<any> {
    if (id === undefined) {
      return Observable.create(() => {
      }).toPromise();
    }

    return this.customHttp.get('/nodes/document/' + id).toPromise();
  }
}
