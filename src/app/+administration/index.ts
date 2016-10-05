import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"

import { SharedModule } from "app/shared"

import { routes } from "./administration.routing"

import { AdministrationComponent } from "./administration.component"
import { EFormsComponent } from "./eforms/eforms.component"
import { UsersComponent } from "./users/users.component"
import { HistoryComponent } from "./history/history.component"

console.log('`Administration module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AdministrationComponent,
    EFormsComponent,
    UsersComponent,
    HistoryComponent
  ],
  exports: [
    //ContactComponent
  ],
  providers: [
    //ContactService
  ]
})
export default class AdministrationModule {
  static routes = routes
}

