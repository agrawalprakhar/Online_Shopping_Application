import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginFailed = false;

  constructor(private authService: AuthService,private router : Router) {}

  login(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      this.loginFailed = false;
      // Redirect to a protected route (e.g., product listing page)
      this.router.navigate(['/products']);
    } else {
      this.loginFailed = true;
    }
  }
}
