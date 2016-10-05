import { Component } from '@angular/core';

@Component({
  selector: 'detail',
  template: `
    <h1 *ngIf="test">Hello from Detail</h1>
    <router-outlet></router-outlet>
  `
})
export class Detail {
  test = true
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Detail` component');
  }

}
