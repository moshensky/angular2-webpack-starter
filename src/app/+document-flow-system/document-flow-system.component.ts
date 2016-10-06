import { Component, OnInit } from "@angular/core";

import { UserService } from "app/core";

@Component({
  //moduleId: module.id,
  selector: "md-document-flow-system",
  templateUrl: `
    <h1 highlight>Welcome {{userName}} to document flow system search!</h1>
    <div *ngIf="msg" class="msg">{{msg}}</div>
    <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class DocumentFlowSystemComponent implements OnInit {
  msg = "Loading data...";
  userName = "";
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
    this.displayMessage("fuck off :)");
  }

  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => {
      this.msg = ""
      console.log("end")
    }, 1500);
  }
}
