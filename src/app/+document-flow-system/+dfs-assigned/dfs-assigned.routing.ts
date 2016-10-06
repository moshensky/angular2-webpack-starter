import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { DFSAssignedComponent} from "./dfs-assigned.component"

export const routes: Routes = [{
  path: "",
  component: DFSAssignedComponent,
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
