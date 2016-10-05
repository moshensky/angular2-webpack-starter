import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SharedModule} from "app/shared"

import { Detail } from './detail.component';

import {routes} from "./detail.routing"

console.log('`Detail` bundle loaded asynchronously!');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Detail
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export default class AboutModule {
  static routes = routes;
}
