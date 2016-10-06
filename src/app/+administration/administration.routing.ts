import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { AdministrationComponent } from "./administration.component"
import { EformsComponent } from "./eforms/eforms.component"
import { UsersComponent } from "./users/users.component"
import { HistoryComponent } from "./history/history.component"

export const routes: Routes = [{
  path: "",
  component: AdministrationComponent,
  children: [
    { path: "", redirectTo: "e-forms", pathMatch: "full" },
    { path: "e-forms", component: EformsComponent },
    { path: "users", component: UsersComponent },
    { path: "history", component: HistoryComponent },
  ]
}]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
