import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  alert: boolean = false;
  FormSignin: UntypedFormGroup;
  isSubmitted: boolean;

  constructor() { }

  ngOnInit(): void {

    this.FormSignin = new UntypedFormGroup({
      userName: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),

    });
  }

  //we can use "form" in html file to get the form field,basically it work as Alias to this.FormAddUser.controls
  get form() {
    return this.FormSignin.controls;
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
  }
}
