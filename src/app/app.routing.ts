import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { Home } from "./home"
import { About } from "./about"
import { NoContent } from "./no-content"

import { DataResolver } from "./app.resolver"


export const routes: Routes = [
  { path: "",      component: Home },
  { path: "home",  component: Home },
  { path: "about", component: About },
  //{ path: "administration", loadChildren: () => System.import("./administration/administration.module") },
  { path: "detail", loadChildren: () => System.import("./+detail") },
  { path: "**",    component: NoContent },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true })
