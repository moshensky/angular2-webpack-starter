import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared"
import { routing, routes } from "./dfs-search.routing"

import { DFSMonitoredComponent } from "./dfs-monitored.component"

console.log('`Document flow system search module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DFSMonitoredComponent
  ],
  providers: [
  ]
})
export class DFSMonitoredModule {
  static routes = routes
}
