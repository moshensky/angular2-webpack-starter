import { Injectable } from '@angular/core';
import { Router } from "@angular/router"

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { ApiService } from "./api.service"
import {StoreService, Store} from "api/core"

@Injectable()
export class AuthService {
  private jwtKey: string = 'retain_token';

  constructor(
    private storeService: StoreService,
    private api: ApiService,
    private store: Store,
    private router: Router
  ) {
    const token = window.localStorage.getItem(this.jwtKey);
    if (token) {
      this.setJwt(token);
    }
  }

  setJwt(jwt: string) {
    window.localStorage.setItem(this.jwtKey, jwt);
    this.api.setHeaders({ Authorization: `Bearer ${jwt}` });
  }

  isLoggedIn(): boolean {
    return Boolean(window.localStorage.getItem(this.jwtKey));
  }

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(path, creds): Observable<boolean> {
    return this.api.post(`/${path}`, creds)
      .do(res => this.setJwt(res.token))
      .do(res => this.storeService.update('user', res.data))
      .map(res => res.data);
  }

  logout(): void {
    window.localStorage.removeItem(this.jwtKey);
    //this.store.purge();
    this.router.navigate(['/login']);
  }
}
