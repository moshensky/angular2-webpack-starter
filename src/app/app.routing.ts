import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { NoContent } from "./no-content"

import { DataResolver } from "./app.resolver"


export const routes: Routes = [
  { path: "", redirectTo: "document-flow-system", pathMatch: "full" },
  { path: "document-flow-system", loadChildren: "./+document-flow-system#DocumentFlowSystemModule" },
  { path: "administration", loadChildren: "./+administration#AdministrationModule" },
  { path: "**", component: NoContent },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })
