import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"


import { DFSNotesComponent } from "./dfs-notes.component"

export const routes: Routes = [{
  path: "",
  component: DFSNotesComponent,
}]


export const routing: ModuleWithProviders = RouterModule.forChild(routes)
