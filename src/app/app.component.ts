import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthenticationService) {
  this.authService.user.subscribe(user =>  {
    console.log(user);
    });
  }

login() {
  this.authService.login();
}

logout() {
  this.authService.logout();
}

}
