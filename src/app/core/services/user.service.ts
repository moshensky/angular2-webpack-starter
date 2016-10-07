// todo: possible unused service
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  userName = 'Sherlock Holmes ' + Date.now();

  constructor() {
  }

  getFullName(): string {
    return this.userName;
  }
}
