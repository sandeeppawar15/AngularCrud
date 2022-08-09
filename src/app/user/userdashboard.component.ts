import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../providers/user.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  users: any;
  alert: boolean = false;

  constructor(private _router: Router, private _userService: UserService, private _route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this._userService.getData().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    })

  }

  btnClick() {
    this._router.navigateByUrl('/adduser');
  }

  close() {
    this.alert = false;
  }

  deleteUser(userId: number) {

    //confirm("Are you sure?") ? true : false;

    this._userService.deleteUser(userId).subscribe((result) => {
      this.alert = true;
      setInterval(() => {
        location.reload();
      }, 2500);
    });
  }


  editUser(userId: number) {
    this._router.navigateByUrl('/edituser/' + userId);
  }

  changeStatus(userId: number) {
    this._userService.changeStatus(userId).subscribe((result) => {

      this.alert = true;
      setInterval(() => {
        location.reload();
      }, 2500);

    });
  }
}
