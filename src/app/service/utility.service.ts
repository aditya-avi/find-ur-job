import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  getimg ()
  {
   return(this.http.get<any>('https://picsum.photos/v2/list'))
  }
}
