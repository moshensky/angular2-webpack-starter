import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"


import { DFSMonitoredComponent } from "./dfs-monitored.component"

export const routes: Routes = [{
  path: "",
  component: DFSMonitoredComponent,
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
