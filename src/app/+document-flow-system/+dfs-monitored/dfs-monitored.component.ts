import { Component, OnInit } from "@angular/core";

import { UserService } from "app/core";

@Component({
  selector: "md-dfs-monitored",
  templateUrl: `
    <h1 highlight>Monitored</h1>
  `,
  styleUrls: ["./dfs-monitored.component.css"]
})
export class DFSMonitoredComponent implements OnInit {
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
