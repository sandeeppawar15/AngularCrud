import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../providers/user.service';
import { ValidatorService } from '../providers/validator.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {


  Roles: { TblRoleId: number; role: string }[] =
    [
      { TblRoleId: 1, role: "Admin" }
      , { TblRoleId: 2, role: "User" }
      , { TblRoleId: 3, role: "Super Admin" }
    ];

  roleid: number;
  FormEditUser: FormGroup;
  isSubmitted: boolean;
  emailPattern = "^[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pipe: any;
  user: any;
  id: number;
  alert: boolean = false;

  constructor(private _router: Router, private _route: ActivatedRoute, private _userService: UserService, private v: ValidatorService) { }

  ngOnInit(): void {

    console.log(this._route.snapshot.params.id);
    var id = this._route.snapshot.params.id;
    if (id != null) {
      this._userService.getData(this._route.snapshot.params.id).subscribe((data) => {

        this.user = data;
        console.log(this.user);

        this.FormEditUser = new FormGroup({
          userName: new FormControl(this.user['userName'], Validators.required),
          firstName: new FormControl(this.user['firstName'], Validators.required),
          lastName: new FormControl(this.user['lastName'], Validators.required),
          email: new FormControl(this.user['emailId'], [Validators.required, Validators.pattern(this.emailPattern)]),
          // password: new FormControl(this.user['password'], [Validators.nullValidator, Validators.minLength(6)]),
          // confirmPassword: new FormControl(this.user['userName'], Validators.compose([Validators.required])),
          roles: new FormControl(this.user['fk_tblRoleId'], Validators.required),
          //tblUserId: new FormControl(this.user['tblUserId'])
        },
          {
            validators: [this.v.isEmailExist("email", this.user["tblUserId"]), this.v.isUserNameExist("userName", this.user["tblUserId"])]
          });
      })
    }
  }

  btnClick() {
    this._router.navigateByUrl('/userdashboard');
  }

  close() {
    this.alert = false;
  }
  //we can use "form" in html file to get the form field,basically it work as Alias to this.FormEditUser.controls
  get form() {
    return this.FormEditUser.controls;
  }

  updateUser() {
    this.isSubmitted = true;

    if (this.FormEditUser.invalid) {
      return
    }

    this.alert = true; //for displaying success message 

    //mention only those fields which we are displaying on edit form
    this.user.firstName = this.FormEditUser.value['firstName']
    this.user.lastName = this.FormEditUser.value['lastName']
    this.user.userName = this.FormEditUser.value['userName']
    this.user.emailId = this.FormEditUser.value['email']
    this.user.fk_tblRoleId = this.FormEditUser.value['roles']

    if (this._route.snapshot.params.id != "") {

      this._userService.update(this._route.snapshot.params.id, this.user).subscribe((result) => {

        //below code is added to reset the error messages of form field after submitting the form, so that error messages will 
        //not render after form submission.
        Object.keys(this.FormEditUser.controls).forEach((key) => {
          const control = this.FormEditUser.controls[key];
          control.setErrors(null);
        });

        setTimeout(() => {
          this._router.navigateByUrl('/userdashboard');
        }, 2000);
      })
    }
  }
}
