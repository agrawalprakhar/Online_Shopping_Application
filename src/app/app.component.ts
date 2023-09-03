import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shopping-app';
  
  constructor(public authService: AuthService) { }

  logout(): void {
    this.authService.logout();
    // You can also navigate to a different page after logout if needed
    // For example: this.router.navigate(['/login']);
  }
}
