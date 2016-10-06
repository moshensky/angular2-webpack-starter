import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { DocumentFlowSystemComponent } from "./document-flow-system.component"
//import { SearchComponent } from "./+search/search.component"


export const routes: Routes = [{
  path: "",
  component: DocumentFlowSystemComponent,
  children: [
    //{ path: "", redirectTo: "search", pathMatch: "full" },
    { path: "", redirectTo: "search" },
    { path: "search", loadChildren: "./+dfs-search#DFSSearchModule" },
    { path: "assigned", loadChildren: "./+dfs-assigned#DFSAssignedModule" },
    { path: "monitored", loadChildren: "./+dfs-monitored#DFSMonitoredModule" },
    { path: "locked", loadChildren: "./+dfs-locked#DFSLockedModule" },
    { path: "expired", loadChildren: "./+dfs-expired#DFSExpiredModule" },
    { path: "notes", loadChildren: "./+dfs-notes#DFSNotesModule" },
  ]
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
