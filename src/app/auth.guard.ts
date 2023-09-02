import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Import your authentication service.

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      // The user is authenticated, allow access to the route.
      return true;
    } else {
      // The user is not authenticated, redirect to the login page.
      this.router.navigate(['/login']); // Redirect to your login page.
      return false; // Prevent access to the route.
    }
  }
}

