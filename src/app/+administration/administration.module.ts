import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared"
import { routing, routes } from "./administration.routing"

import { AdministrationComponent } from "./administration.component"
import { EformsComponent } from "./eforms/eforms.component"
import { UsersComponent } from "./users/users.component"
import { HistoryComponent } from "./history/history.component"


console.log('`Administration module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    AdministrationComponent,
    EformsComponent,
    UsersComponent,
    HistoryComponent
  ]
})
export class AdministrationModule {
  static routes = routes
}

