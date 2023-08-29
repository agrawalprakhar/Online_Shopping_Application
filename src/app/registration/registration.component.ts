import { Component } from '@angular/core';
import { User } from '../user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration', // Updated selector
  templateUrl: './registration.component.html', // Updated template URL
  styleUrls: ['./registration.component.css'] // Updated style URL
})
export class RegistrationComponent { // Updated class name
  user: User = { id: 0, username: '', password: '' };
  registrationSuccessful = false;

  constructor(private authService: AuthService) {}

  register(): void {
    const success = this.authService.register(this.user);
    if (success) {
      this.registrationSuccessful = true;
    }
  }
}
