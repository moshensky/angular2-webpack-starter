import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

import { UserService } from "app/core";

@Component({
  selector: 'home',  // <home></home>
  providers: [
    Title
  ],
  styleUrls: ['./home.style.css'],
  templateUrl: './home.template.html'
})
export class Home {
  localState = { value: '' };
  userName = ""

  constructor(public appState: AppState,
    private userService: UserService,
    public title: Title) {
    this.userName = userService.getFullName()
  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
