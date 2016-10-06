import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';

//import { TitleComponent }    from './title.component';
import { UserService, AuthGuard, AuthService } from './services';

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
    AuthService
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
