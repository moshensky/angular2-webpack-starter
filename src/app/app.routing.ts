import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { Home } from "./home"
import { About } from "./about"
import { NoContent } from "./no-content"

import { DataResolver } from "./app.resolver"


export const routes: Routes = [
  { path: "", component: Home },
  { path: "home", component: Home },
  { path: "document-flow-system", loadChildren: "./+document-flow-system#DocumentFlowSystemModule" },
  { path: "administration", loadChildren: "./+administration#AdministrationModule" },
  { path: "detail", loadChildren: "./+detail#DetailModule" },
  { path: "**", component: NoContent },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })
