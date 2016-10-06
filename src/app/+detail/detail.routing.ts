import { Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core"

import { DetailComponent } from "./detail.component";
import { XComponent } from "./x/x.component"

export const routes: Routes = [
  { path: "", component: DetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)
