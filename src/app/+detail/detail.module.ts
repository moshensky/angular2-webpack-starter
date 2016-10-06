import { NgModule } from '@angular/core';
import { SharedModule } from "app/shared"
import { routing, routes } from "./detail.routing"

import { DetailComponent } from './detail.component';
import { XComponent } from "./x/x.component"


console.log('`Detail` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DetailComponent,
    XComponent
  ]
})
export class DetailModule {
  static routes = routes;
}
