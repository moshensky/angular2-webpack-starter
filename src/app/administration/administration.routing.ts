import { ModuleWithProviders } from "@angular/core"
import { RouterModule } from "@angular/router"

import { AdministrationComponent } from "./administration.component"

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: "administration", component: AdministrationComponent }
])
