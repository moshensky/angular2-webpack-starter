import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { HttpModule } from '@angular/http'

//import { FilterTextComponent } from './filter-text/filter-text.component';
//import { FilterTextService } from './filter-text/filter-text.service';
//import { InitCapsPipe } from './init-caps.pipe';
import { HighlightDirective } from "./highlight.directive"
import { BadgeCounterComponent } from "./components"

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    BadgeCounterComponent
    //FilterTextComponent,
    //InitCapsPipe
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightDirective,
    BadgeCounterComponent
    //FilterTextComponent,
    //InitCapsPipe
  ]
})
export class SharedModule {
  constructor() { }
}
