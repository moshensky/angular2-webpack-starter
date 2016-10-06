import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { AuthGuard } from "app/core"

import { NoContent } from "./no-content"
import { DataResolver } from "./app.resolver"


export const routes: Routes = [{
  path: "",
  redirectTo: "document-flow-system",
  pathMatch: "full"
}, {
  path: "document-flow-system",
  loadChildren: "./+document-flow-system#DocumentFlowSystemModule",
  canActivate: [AuthGuard]
}, {
  path: "administration",
  loadChildren: "./+administration#AdministrationModule",
  canActivate: [AuthGuard]
}, {
  path: "**",
  component: NoContent
}]


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })
