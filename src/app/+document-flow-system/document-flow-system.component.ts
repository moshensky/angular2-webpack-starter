import { Component, OnInit } from "@angular/core";

import { UserService } from "app/core";

@Component({
  selector: "md-document-flow-system",
  templateUrl: `
    <nav>
      <ul>
        <li><a [routerLink]="['./search']" routerLinkActive="active-link">Search</a></li>
        <li><a [routerLink]="['./assigned']" routerLinkActive="active-link">Assigned</a></li>
        <li><a [routerLink]="['./monitored']" routerLinkActive="active-link">Monitored</a></li>
        <li><a [routerLink]="['./locked']" routerLinkActive="active-link">Locked</a></li>
        <li><a [routerLink]="['./expired']" routerLinkActive="active-link">Expired</a></li>
        <li><a [routerLink]="['./notes']" routerLinkActive="active-link">Notes</a></li>
      </ul>
    </nav>
    <h1 highlight>Welcome {{userName}} to document flow system search!</h1>
    <div *ngIf="msg" class="msg">{{msg}}</div>
    <aside>Tree menu</aside>
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
