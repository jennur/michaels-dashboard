import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [LoginService]
})

export class LoginPageComponent implements OnInit {
  title: String = 'Login to see your Dashboard';
  public isUsername: Boolean = false;
  public isPassword: Boolean = false;
  userObj;

  constructor(protected loginService: LoginService, protected router: Router) {}

  ngOnInit() {
    localStorage.setItem('Username', 'Michael');
    localStorage.setItem('Password', '@Michael123');
    this.userObj = this.loginService.getLoginDetails();
  }

  testUserDetails(userDetails) {
    if(userDetails.username !== this.userObj.username || userDetails.password !== this.userObj.password) {
      this.title = 'Login to see your Dashboard';
      if(userDetails.username !== this.userObj.username) {
        this.isUsername = true;
      }
      if(userDetails.password !== this.userObj.password) {
        this.isPassword = true;
      }
    } else {
      sessionStorage.setItem('AuthToken', 'sa6d456sd4a4ad6s');
      this.router.navigate(['/dashboard']);
      this.isPassword = false;
      this.isUsername = false;
    }
  }
}
