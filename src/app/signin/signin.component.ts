import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { SigninService } from '../providers/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  alert: boolean = false;
  errorMsg: string;
  FormSignin: UntypedFormGroup;
  isSubmitted: boolean;
  array: any;

  constructor(private _signinService: SigninService) { }

  ngOnInit(): void {

    this.FormSignin = new UntypedFormGroup({

      userName: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required)
    });
  }

  //we can use "form" in html file to get the form field,basically it work as Alias to this.FormAddUser.controls
  get form() {
    return this.FormSignin.controls;
  }

  close() {
    this.alert = false;
  }

  submitForm() {

    this.isSubmitted = true;

    if (this.FormSignin.invalid) {
      return
    }

    let frmData: {
      userName: string,
      password: string
    } =
    {
      "userName": this.FormSignin.value['userName'],
      "password": this.FormSignin.value['password']
    };

    // frmData.password = btoa(frmData.password + "@#45UsethisSecretKey^");
    this._signinService.signIn(frmData).subscribe(
      result => {
        this.array = JSON.parse(JSON.stringify(result));
        console.log(this.array);
        localStorage.setItem('currentUser', JSON.stringify({ userName: this.array["userName"], userId: this.array["tblUserId"] }));
      },
      (error) => {

        this.array = JSON.parse(JSON.stringify(error));

        this.alert = true;

        if (this.array["error"] == "no_record_found") {
          this.errorMsg = "invalid credentials";
        } else if (this.array["error"] == "user_inactive") {
          this.errorMsg = "your account is not active";
        } else {
          this.errorMsg = "something went wrong, please try later";
        }

      });
  }
}
