import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared"
import { routing, routes } from "./dfs-locked.routing"

import { DFSLockedComponent } from "./dfs-locked.component"

console.log('`DFS Locked module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DFSLockedComponent
  ],
  providers: [
  ]
})
export class DFSLockedModule {
  static routes = routes
}
