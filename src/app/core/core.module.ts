import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from "@angular/core"
import { CommonModule } from "@angular/common"

import {
  UserService, AuthGuard, AuthService, CanDeactivateGuard,
  SpinnerService, StoreService, ApiService
} from "./services"

import { Store } from "./store"

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    //TitleComponent,
  ],
  exports: [
    //TitleComponent,
  ],
  providers: [
    UserService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    SpinnerService,
    StoreService,
    Store,
    ApiService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
