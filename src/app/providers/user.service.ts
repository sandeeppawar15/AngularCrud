import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "http://localhost:90/api/users";
  // baseurl = "https://localhost:7210/api/Users";
  // postUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getData(userId?: number) {
    if (!isNaN(Number(userId))) {
      return this.http.get(this.baseurl + '/' + userId);
    }
    return this.http.get(this.baseurl);
  }

  saveData(data: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);

    return this.http.post(this.baseurl + '/', body, { 'headers': headers });
  }

  deleteUser(userId: number) {
    return this.http.delete(this.baseurl + '/' + userId);
  }

  checkIsUserNameExist(userName: string) {
    return this.http.get(this.baseurl + '/UserNameExist?userName=' + userName);
  }

  checkIsEmailIdExist(emailId: string) {
    return this.http.get(this.baseurl + '/EmailExist?email=' + emailId);
  }

}
