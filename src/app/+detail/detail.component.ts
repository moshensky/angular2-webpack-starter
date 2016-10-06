import { Component, OnInit } from "@angular/core";

import { UserService } from "app/core";

@Component({
  selector: 'md-detail',
  templateUrl: `
    <h1 >Welcome {{userName}} to administration!</h1>
    <div *ngIf="msg" class="msg">{{msg}}</div>
    <router-outlet></router-outlet>
    <md-eforms></md-eforms>
  `
  //styleUrls: []
})
export class DetailComponent  implements OnInit {
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
