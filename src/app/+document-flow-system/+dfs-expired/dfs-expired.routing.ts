import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"


import { DFSExpiredComponent} from "./dfs-expired.component"

export const routes: Routes = [{
  path: "",
  component: DFSExpiredComponent,
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
