import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticatedUser: User | null = null;

  // Simulated user data (replace with API calls)
  private users: User[] = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' }
  ];
  isAuthenticated(): boolean {
    // Implement your logic to check if the user is authenticated
    // For example, you might check if there's a valid token in localStorage
    return localStorage.getItem('authToken') !== null;
  }

  register(user: User): boolean {
    // Simulated registration logic
    const existingUser = this.users.find(u => u.username === user.username);
    if (existingUser) {
      return false; // User already exists
    }

    user.id = this.users.length + 1;
    this.users.push(user);
    return true;
  }

  login(username: string, password: string): boolean {
    // Simulated login logic
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.authenticatedUser = user;
      return true;
    }
    return false;
  }

  getAuthenticatedUser(): User | null {
    return this.authenticatedUser;
  }

  logout(): void {
    // Clear the authentication token from localStorage or any other storage
    localStorage.removeItem('authToken');
    // You can perform any other necessary cleanup
  }
}
