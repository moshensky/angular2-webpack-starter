import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

//import { FilterTextComponent } from './filter-text/filter-text.component';
//import { FilterTextService } from './filter-text/filter-text.service';
//import { InitCapsPipe } from './init-caps.pipe';
import { HighlightDirective } from "./highlight.directive"

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    HighlightDirective
    //FilterTextComponent,
    //InitCapsPipe
  ],
  providers: [
    //FilterTextService
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective
    //FilterTextComponent,
    //InitCapsPipe
  ]
})
export class SharedModule {
  constructor() { }
}
