import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogindataService } from './logindata.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error:string;
  constructor(private login_data: LogindataService,private _roter:Router) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      u_EmailId: new FormControl(null,[Validators.required,Validators.email]),
      u_password: new FormControl(null,[Validators.required])
    });
  }
  onLogin() {
    console.log(this.loginForm);
    if (this.loginForm.get('u_EmailId').value!=null && this.loginForm.get('u_password').value!=null) {
      console.log("sucess");
      this.login_data.login(this.loginForm.value).subscribe(
        (x: User[]) => {
          if (x.length == 1) {
            console.log(x);
            alert("valid");
            localStorage.setItem('u_EmailId',this.loginForm.get('u_EmailId').value);
            console.log('nav/dashboard');
            this._roter.navigate(['/nav/dashboard']);
          }
          else{
            alert("invalid id & password");
        }
       }
      );
    }
    else {
      alert("id password should not be empty.");
    }
  }
}

