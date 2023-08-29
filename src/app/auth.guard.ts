import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true;
    } else {
      // Redirect unauthenticated users to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }

  private isAuthenticated(): boolean {
    // Check if the token is present in localStorage
    return !!localStorage.getItem('token');
  }
}
