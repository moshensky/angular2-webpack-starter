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
  template: `
    <router-outlet></router-outlet>


    <nav>
      <ul>
        <li><a [routerLink]="['./administration']" routerLinkActive="active-link">Administration</a></li>
        <li><a [routerLink]="['./document-flow-system']" routerLinkActive="active-link">Document Flow System</a></li>
      </ul>
    </nav>
    <i class="fa fa-camera-retro fa-5x"></i>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    <pre class="app-state">this.state = {{ state | json }}</pre>
  `
})
export class AppComponent {
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
