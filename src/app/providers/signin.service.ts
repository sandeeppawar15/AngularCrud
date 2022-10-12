import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  // baseUrl = "http://localhost:90/api/UserAuth";
  baseUrl = "https://localhost:7210/api/UserAuth";

  constructor(private http: HttpClient) { }


  signIn(data: any): Observable<any> {

    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + '/', body, { 'headers': headers });

  }


}
