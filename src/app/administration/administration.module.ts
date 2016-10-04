import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AdministrationComponent } from "./administration.component";
import { routing } from "./administration.routing"

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AdministrationComponent
  ],
  exports: [
    //ContactComponent
  ],
  providers: [
    //ContactService
  ]
})
export class AdministrationModule { }
