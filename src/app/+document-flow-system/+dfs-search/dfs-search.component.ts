import { Component, OnInit } from "@angular/core";

import { UserService } from "app/core";

@Component({
  //moduleId: module.id,
  selector: "md-dfs-search",
  templateUrl: `
    <h1 highlight>Welcome {{userName}} to document flow system search - search!</h1>
    <div *ngIf="msg" class="msg">{{msg}}</div>
  `,
  styleUrls: []
})
export class DFSSearchComponent implements OnInit {
  msg = "Loading data...";
  userName = "";
  /*
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
  */

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
