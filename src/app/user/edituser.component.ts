import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../providers/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user: Object;

  constructor(private _route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params.id);

    if (this._route.snapshot.params.id) {
 
      this._userService.getData(this._route.snapshot.params.id).subscribe((data) => {
        this.user = data;
        console.log(this.user);

      })
    }


  }
}
