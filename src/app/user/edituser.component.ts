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

  constructor(private _router: Router, private _route: ActivatedRoute, private _userService: UserService, private v: ValidatorService) { }

  ngOnInit(): void {

    console.log(this._route.snapshot.params.id);

    if (this._route.snapshot.params.id) {

      this._userService.getData(this._route.snapshot.params.id).subscribe((data) => {
        this.user = data;
        console.log(this.user);

        this.FormEditUser = new FormGroup({
          userName: new FormControl(this.user['userName'], Validators.required),
          firstName: new FormControl(this.user['firstName'], Validators.required),
          lastName: new FormControl(this.user['lastName'], Validators.required),
          email: new FormControl(this.user['emailId'], [Validators.required, Validators.pattern(this.emailPattern)]),
          // password: new FormControl(this.user['password'], [Validators.required, Validators.minLength(6)]),
          // confirmPassword: new FormControl(this.user['userName'], Validators.compose([Validators.required])),
          roles: new FormControl(this.user['fk_tblRoleId'], Validators.required)
        },
          {
            validators: [this.v.isEmailExist("email"), this.v.isUserNameExist("userName")]
          }
        );
      })
    }
  }

  btnClick() {
    this._router.navigateByUrl('/userdashboard');
  }

  //we can use "form" in html file to get the form field,basically it work as Alias to this.FormEditUser.controls
  get form() {
    return this.FormEditUser.controls;
  }

  submitForm() {

  }




}
