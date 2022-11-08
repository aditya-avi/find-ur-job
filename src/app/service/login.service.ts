import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postlogin(email:any,password:any)
  {
    console.log('hit01');
    
    return this.http.post('url',{"email":email,"password":password})
  }
}
