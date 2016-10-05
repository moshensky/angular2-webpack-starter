import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"

import { routes } from "./administration.routing"

import { AdministrationComponent } from "./administration.component"
import { EFormsComponent } from "./eforms/eforms.component"
import { UsersComponent } from "./users/users.component"
import { HistoryComponent } from "./history/history.component"

console.log('`Administration module` bundle loaded asynchronously');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
