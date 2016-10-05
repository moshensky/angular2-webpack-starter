import { ModuleWithProviders } from "@angular/core"

import { AdministrationComponent } from "./administration.component"
import { EFormsComponent } from "./eforms/eforms.component"
import { UsersComponent } from "./users/users.component"
import { HistoryComponent } from "./history/history.component"

export const routes = [{
  path: "",
  component: AdministrationComponent,
  children: [
    { path: "", redirectTo: "e-forms" },
    { path: "e-forms", component: EFormsComponent },
    { path: "users", component: UsersComponent },
    { path: "history", component: HistoryComponent },
  ]
}]
