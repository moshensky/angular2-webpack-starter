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
    { path: "search", loadChildren: () => System.import("./+dfs-search") },
    //{ path: "search", component: SearchComponent },
  ]
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
