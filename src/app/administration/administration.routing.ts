import { ModuleWithProviders } from "@angular/core"
import { RouterModule } from "@angular/router"

import { AdministrationComponent } from "./administration.component"
import {
  AdministrationComponent,
  //EFormsComponent,
  //UsersComponent,
  //HistoryComponent
} from "./index"

export const routing: ModuleWithProviders = RouterModule.forChild([{
  path: "administration",
  component: AdministrationComponent,
  children: [
    //{ path: "e-forms", component: EFormsComponent },
    //{ path: "users", component: UsersComponent },
    //{ path: "history", component: HistoryComponent },
  ]
}])
