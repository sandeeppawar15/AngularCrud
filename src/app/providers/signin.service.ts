import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  baseUrl = "http://localhost:90/api/users";

  constructor(private http: HttpClient) { }


  signIn(userName: string, password: string) {
    console.log("userName=>" + userName);
    console.log("password=>" + password);
    return true;
  }


}
