import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postlogin(email:string,password:any)
  {
    console.log('hit01');
    
    return this.http.post('http://localhost:8762/login/post',{"loginId":email,"password":password})
  }
}
