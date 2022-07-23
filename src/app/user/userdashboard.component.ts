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
      console.log("inside dashboard");
      
      console.log(this.users);
      
    })

  }

  ngOnInit(): void {


  }

  btnClick() {
    this.router.navigateByUrl('/adduser');
  }

}
