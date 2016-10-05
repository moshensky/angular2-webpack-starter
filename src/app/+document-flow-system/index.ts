import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared"

import { routing, routes } from "./document-flow-system.routing"

import { DocumentFlowSystemComponent } from "./document-flow-system.component"

console.log('`Document flow system module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DocumentFlowSystemComponent
  ],
  providers: [
  ]
})
export default class DocmentFlowSystemModule {
  static routes = routes
}

