import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../service/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetail = {};
  constructor( private _router: Router, private _authGuard: AuthGuard) { }

  ngOnInit() {
    this.userDetail = {
      username: '',
      password: ''
    }
    if(this._authGuard.canActivate()) {
      this._router.navigate(['/add']);
    }
  }
  submit(values, isValid) {
    if (!isValid) {
      return;
    }
    this.userDetail['username'] = values.username;
    this.userDetail['password'] = values.password;

    sessionStorage.setItem("login",JSON.stringify(this.userDetail));
    this._router.navigate(['/add']);
  }

}
