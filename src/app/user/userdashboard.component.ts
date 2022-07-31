import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../providers/user.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  users: any;
  
  constructor(private router: Router, private userService: UserService) {
    this.userService.getData().subscribe((data) => {
      this.users = data;
      console.log("inside dashboard constructor");
      console.log(this.users);
    })

  }

  ngOnInit(): void {
  }

  btnClick() {
    this.router.navigateByUrl('/adduser');
  }

  deleteUser(userId: any) {
    console.log(userId);
    this.userService.deleteUser(userId).subscribe((result) => {
      //console.warn("result", result);
      alert("Record has been deleted successfully.");
      location.reload();
      //this.router.navigateByUrl('/userdashboard');
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    });
  }

}
