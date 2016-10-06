import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared"
import { routing, routes } from "./dfs-search.routing"

import { DFSExpiredComponent} from "./dfs-expired.component"

console.log('`DFS Expired module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DFSExpiredComponent
  ],
  providers: [
  ]
})
export class DFSExpiredModule {
  static routes = routes
}
