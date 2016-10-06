import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared"
import { routing, routes } from "./dfs-search.routing"

import { DFSAssignedComponent} from "./dfs-assigned.component"

console.log('`DFS Assigned module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DFSAssignedComponent
  ],
  providers: [
  ]
})
export class DFSAssignedModule {
  static routes = routes
}
