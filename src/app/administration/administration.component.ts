import { Component, OnInit } from "@angular/core";

import { UserService } from "app/services";

@Component({
  moduleId: module.id,
  selector: "md-administration",
  templateUrl: `
    <h1>{{userName}}</h1>
    <div *ngIf="msg" class="msg">{{msg}}</div>
  `,
  styleUrls: []
})
export class AdministrationComponent implements OnInit {
  msg = "Loading data...";
  userName = "";
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }

  ngOnInit() {
  }

  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = "", 1500);
  }
}
