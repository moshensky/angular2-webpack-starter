import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { routing } from "./administration.routing"

import { AdministrationComponent } from "./administration.component"
import { EFormsComponent } from "./eforms/eforms.component"
import { UsersComponent } from "./users/users.component"
import { HistoryComponent } from "./history/history.component"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
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
export class AdministrationModule { }
