import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private authService: AuthenticationService) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        () => {
          // Redirect to protected route or perform other actions
        },
        error => {
          // Handle login error
        }
      );
  }
}
