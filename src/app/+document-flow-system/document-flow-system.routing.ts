import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { DocumentFlowSystemComponent } from "./document-flow-system.component"


export const routes: Routes = [{
  path: "",
  component: DocumentFlowSystemComponent,
  /*
  children: [
    { path: "", redirectTo: "search" },
    { path: "search", loadChildren: () => System.import("./+search") },
  ]
  */
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
