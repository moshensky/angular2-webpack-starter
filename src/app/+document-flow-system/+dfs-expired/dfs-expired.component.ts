import { Component, OnInit } from "@angular/core";

import { UserService } from "app/core";

@Component({
  selector: "md-dfs-expired",
  templateUrl: `
    <h1 highlight>Expired</h1>
  `,
  styleUrls: ["./dfs-expired.component.css"]
})
export class DFSExpiredComponent implements OnInit {
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
