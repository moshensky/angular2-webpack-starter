import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared"
import { routing, routes } from "./dfs-search.routing"

import { DFSNotesComponent } from "./dfs-notes.component"

console.log('`Document flow system search module` bundle loaded asynchronously!');

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    DFSNotesComponent
  ],
  providers: [
  ]
})
export class DFSNotesModule {
  static routes = routes
}
