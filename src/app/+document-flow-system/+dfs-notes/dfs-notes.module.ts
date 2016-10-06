import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared"
import { routing, routes } from "./dfs-search.routing"

import { DFSSearchComponent } from "./dfs-search.component"

console.log('`Document flow system search module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DFSSearchComponent
  ],
  providers: [
  ]
})
export class DFSSearchModule {
  static routes = routes
}
