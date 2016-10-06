import { Component, OnInit } from "@angular/core";

@Component({
  selector: "md-eforms",
  templateUrl: `
    <h1>EForms</h1>
  `
})
export class EformsComponent implements OnInit {
  ngOnInit() {
    console.log("md-eforms loaded")
  }
}
