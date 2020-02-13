import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SignupdataService } from './signupdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})

export class SignupformComponent implements OnInit {
  hide = true;
  hide1:true;
  Signupform: FormGroup;
  selectedFile: File = null;

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private _signuodata: SignupdataService, private _router: Router) { }

  onChange(f) {
    this.selectedFile = <File>f.target.files[0];
  }

  ngOnInit() {
    this.Signupform = new FormGroup({
      u_EmailId: new FormControl('', [Validators.required, Validators.email]),
      u_Name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      u_Address: new FormControl(null, [Validators.required]),
      u_gender: new FormControl(null),
      u_Type: new FormControl('delivery_boy'),
      password_group: new FormGroup({
        u_password: new FormControl(null, [Validators.required]),
        u_confirm_password: new FormControl(null)
      }, [this.passwordMatch.bind(this)]),
      u_mobileno: new FormControl(null),
      u_dob: new FormControl(null),
      u_img: new FormControl(null),
    });
  }

  onSignup() {

    let userobj = new FormData();
    userobj.append("u_EmailId", this.Signupform.value.u_EmailId);
    userobj.append("u_Name", this.Signupform.value.u_Name);
    userobj.append("u_Address", this.Signupform.value.u_Address);
    userobj.append("u_gender", this.Signupform.value.u_gender);
    userobj.append("u_Type", this.Signupform.value.u_Type);
    userobj.append("u_password", this.Signupform.value.password_group.u_password);
    userobj.append("u_mobileno", this.Signupform.value.u_mobileno);
    userobj.append("u_dob", this.Signupform.value.u_dob);

    if(this.selectedFile != null) {
      userobj.append("image",this.selectedFile,this.selectedFile.name);
    }
    else
    {
      userobj.append("image",new Blob(),null);
    }

    this._signuodata.signup(userobj).subscribe(
      (x: any) => {
        console.log(x)
        alert('Your Detalis Are Saved');
        this._router.navigate(['/nav/user']);
      }
    );
  }
  passwordMatch(c: AbstractControl): { [s: string]: boolean } {
    const pass = c.get('u_password').value;
    const cpass = c.get('u_confirm_password').value;
    if (pass != cpass) {

      return { 'notSame': true };
    }
    return null;
  }

  onSignupCancel() {
    this._router.navigate(['/nav/signup']);
  }
}
