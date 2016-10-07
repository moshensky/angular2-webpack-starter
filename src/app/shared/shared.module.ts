import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { HttpModule } from '@angular/http'

//import { FilterTextComponent } from './filter-text/filter-text.component';
//import { FilterTextService } from './filter-text/filter-text.service';
//import { InitCapsPipe } from './init-caps.pipe';
import { HighlightDirective } from "./highlight.directive"
import { BadgeCounterComponent, DFSTreeComponent } from "./components"

import { TreeModule, ContextMenuModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,

    TreeModule,
    ContextMenuModule,
  ],
  declarations: [
    HighlightDirective,
    BadgeCounterComponent,
    DFSTreeComponent,
  ],
  exports: [
    CommonModule,

    TreeModule,
    ContextMenuModule,

    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HighlightDirective,
    BadgeCounterComponent,
    DFSTreeComponent,
  ]
})
export class SharedModule {
  constructor() { }
}
