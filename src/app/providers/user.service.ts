import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:90/api/users";
  //baseUrl = "https://localhost:7210/api/Users";
  //postUrl = "https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient) { }

  getData(userId?: number) {
    if (!isNaN(Number(userId))) {
      return this.http.get(this.baseUrl + '/' + userId);
    }
    return this.http.get(this.baseUrl);
  }

  saveData(data: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);

    return this.http.post(this.baseUrl + '/', body, { 'headers': headers });
  }

  deleteUser(userId: number) {
    return this.http.delete(this.baseUrl + '/' + userId);
  }

  changeStatus(id: number, status: boolean) {

    console.log(id, " | ", status);

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify({});

    // return this.http.put(this.baseUrl + '/', body, { 'headers': headers });
    return this.http.put(this.baseUrl + '/changeStatus?id=' + id + '&status=' + status, body);
  }


  checkIsUserNameExist(userName: string, id?: number) {

    if (!isNaN(Number(id))) {
      return this.http.get(this.baseUrl + '/UserNameExist?userName=' + userName + '&id=' + id);
    }
    return this.http.get(this.baseUrl + '/UserNameExist?userName=' + userName);
  }

  checkIsEmailIdExist(emailId: string, id?: number) {

    if (!isNaN(Number(id))) {
      return this.http.get(this.baseUrl + '/EmailExist?email=' + emailId + '&id=' + id);
    }
    return this.http.get(this.baseUrl + '/EmailExist?email=' + emailId);
  }

  update(id: number, params: any) {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(params);
    return this.http.put(`${this.baseUrl}/${id}`, body, { 'headers': headers });
  }


}
