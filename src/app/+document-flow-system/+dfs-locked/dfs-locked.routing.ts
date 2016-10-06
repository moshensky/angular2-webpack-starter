import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"


import { DFSLockedComponent } from "./dfs-locked.component"

export const routes: Routes = [{
  path: "",
  component: DFSLockedComponent,
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
