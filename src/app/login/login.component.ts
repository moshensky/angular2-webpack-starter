import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { AuthService } from "app/core"
@Component({
  template: `
    <div>
      <form (ngSubmit)="authenticate()" #authForm="ngForm">
          <input type="email" name="email" placeholder="email" required [(ngModel)]="user.email" #email="ngModel">
          <div class="error" [hidden]="email.valid || email.pristine">email is invalid</div>
          <input type="password" name="password" placeholder="password" required [(ngModel)]="user.password" #password="ngModel">
          <div class="error" [hidden]="password.valid || password.pristine">password is required</div>
          <button [disabled]="!authForm.form.valid" type="submit">
      </form>
    </div>
    `
})
export class LoginComponent {
  user = {
    password: "",
    email: ""
  }

  constructor(private authService: AuthService, private router: Router) { }

  authenticate() {
    this.authService.login("token", this.user).subscribe(() => {
      if (this.authService.isLoggedIn()) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : ""
        // Redirect the user
        this.router.navigate([redirect])
      }
    })
  }

  logout() {
    this.authService.logout()
  }
}
