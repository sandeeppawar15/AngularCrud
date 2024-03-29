import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../providers/user.service';
import { ValidatorService } from '../providers/validator.service';
import { DatePipe } from '@angular/common';
import * as CryptoJS from 'crypto-js';


interface IRoles {
  TblRoleId: number;
  Role: string;

}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [ValidatorService],
})


export class AdduserComponent implements OnInit {

  Roles: { TblRoleId: number; role: string }[] =
    [
      { TblRoleId: 1, role: "Admin" }
      , { TblRoleId: 2, role: "User" }
      , { TblRoleId: 3, role: "Super Admin" }
    ];

  roleid: number;
  FormAddUser: FormGroup;
  isSubmitted: boolean;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pipe: any;
  // password: string = '';

  constructor(private router: Router, private v: ValidatorService, private userService: UserService) {

    this.userService.getData().subscribe(data => {
      console.log(data)
    });    
  }

  ngOnInit(): void {
    this.FormAddUser = new FormGroup({
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),//, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('', Validators.compose([Validators.required])),
      roles: new FormControl('', Validators.required)
    },
      {
        validators: this.v.passwordMatch("password", "confirmPassword")
      }
    );
  }

  btnClick() {
    this.router.navigateByUrl('/userdashboard');
  }

  //we can use "form" in html file to get the form field,basically it work as Alias to this.FormAddUser.controls
  get form() {
    return this.FormAddUser.controls;
  }

  submitForm() {

    const today = new Date();
    const pipe = new DatePipe('en-US')

    this.isSubmitted = true;

    if (this.FormAddUser.invalid) {
      return
    }
    let frmData: {
      fk_tblRoleId: Number,
      firstName: string,
      lastName: string,
      userName: string,
      password: string,
      emailId: string,
      status: true,
      createdOn: string
    } =

    {
      "fk_tblRoleId": this.FormAddUser.value['roles'],
      "firstName": this.FormAddUser.value['firstName'],
      "lastName": this.FormAddUser.value['lastName'],
      "userName": this.FormAddUser.value['userName'],
      "password": this.FormAddUser.value['password'],
      "emailId": this.FormAddUser.value['email'],
      "status": true,
      "createdOn":"2022-07-19"
    };

    this.userService.saveData(frmData).subscribe((result) => {
      console.log("Inside savedata");
      console.log(result);
      this.router.navigateByUrl('/userdashboard');

    })

    // console.log(JSON.stringify(frmData));
    console.log(JSON.stringify(this.FormAddUser.value));
  }

}
