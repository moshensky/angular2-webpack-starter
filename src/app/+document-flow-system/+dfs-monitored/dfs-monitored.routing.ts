import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"


import { DFSSearchComponent } from "./dfs-search.component"

export const routes: Routes = [{
  path: "",
  component: DFSSearchComponent,
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
