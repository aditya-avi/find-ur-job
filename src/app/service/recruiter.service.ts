import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private http: HttpClient) { }

  getJobPostedByRec(data)
  {
    console.log('hit01');
    
    return this.http.get('http://localhost:8083/job/recruiterJobDetails/get/'+data)
  }

  deletejob(id)
  {
    return this.http.post('http://localhost:8083/job/deleteJob/post',{
      "jobId": id,
      "loginId": localStorage.getItem('token')
    })

  }
}
