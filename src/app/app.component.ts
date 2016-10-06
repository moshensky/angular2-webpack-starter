import { Component, ViewEncapsulation } from "@angular/core"
import {
  Router, NavigationStart, NavigationEnd,
  NavigationCancel, NavigationError, Event
} from "@angular/router"

import { Observable } from "rxjs/Observable"
import "rxjs/add/operator/filter"
import "rxjs/add/operator/distinctUntilChanged"

import { AppState } from "./app.service"
import { SpinnerService, Store } from "app/core"

function isStart(e: Event, index: number): boolean {
  return e instanceof NavigationStart;
}

function isEnd(e: Event, index: number): boolean {
  return e instanceof NavigationEnd ||
    e instanceof NavigationCancel ||
    e instanceof NavigationError;
}

@Component({
  selector: "app",
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    "./app.style.css",
  ],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  drafts = 1
  expired = 2
  expiring = 3
  notificationsBadgeCounter = 11

  state: any
  constructor(
    router: Router,
    spinner: SpinnerService,
    public appState: AppState,
    private store: Store
  ) {
    router.events
      .filter((e, i) => isStart(e, i) || isEnd(e, i))
      .map(isStart)
      .distinctUntilChanged()
      .subscribe(showSpinner => {
        if (showSpinner) {
          spinner.show()
        } else {
          spinner.hide()
        }
      })

    this.store.changes//.pluck('notes')
      .subscribe((state: any) => this.state = state);
  }

  ngOnInit() {
    console.log("Initial App State", this.appState.state)
  }

}
