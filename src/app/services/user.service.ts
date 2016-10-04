import { Injectable } from '@angular/core';

@Injectable()
/** Dummy version of an authenticated user service */
export class UserService {
  userName = 'Sherlock Holmes ' + Date.now();

  getFullName() : string {
    return this.userName;
  }
}
