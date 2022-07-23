import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "https://localhost:7210/api/users";
  // postUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.baseurl);
  }

  saveData(data: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);

    return this.http.post(this.baseurl + '/', body, { 'headers': headers });
  }

  // deleteUser(userId:number){
  //   return this.http.delete(this.baseurl + '/', body, { 'headers': headers });
  // }

}
