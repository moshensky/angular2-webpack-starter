import { Component, Input } from '@angular/core';

@Component({
  selector: 'badge-counter',
  templateUrl: `
    <span class="alert" [ngClass]="styleClass">{{content}}</span>
  `,
  styleUrls: ["./badge-counter.component.css"]
})
export class BadgeCounterComponent {

  @Input() styleClass: string = '';
  @Input() content: any = 0;

}
