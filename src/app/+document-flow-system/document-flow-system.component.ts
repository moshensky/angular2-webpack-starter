import { Component, OnInit } from "@angular/core";

import { UserService } from "app/core";

@Component({
  selector: "md-document-flow-system",
  templateUrl: "./document-flow-system.component.html",
  styleUrls: ["./document-flow-system.component.css"]
})
export class DocumentFlowSystemComponent implements OnInit {
  drafts = 1
  expired = 2
  expiring = 3
  notificationsBadgeCounter = 11

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
