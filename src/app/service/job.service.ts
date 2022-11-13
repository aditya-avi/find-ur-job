import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  postjob(data:any,skills:any)
  {
   var loginId=localStorage.getItem('token')
    console.log(loginId);
    
    console.log(skills);
    
    return this.http.post('http://localhost:8082/job/postJob/post',
    {
      "active": "yes",
      "ctcOffered": data.ctc,
      "editJob": true,
      "jobDescription": data.jobDescription,
      "jobId": 0,
      "jobLocation": data.jobLocation,
      "jobTitle": data.jobTitle,
      "jobTypeId": data.jobType,
      "loginId": loginId,
      "salaryPerHour": 0,
      "skillsRequired":skills
    })
  }

  getjobs()
  {
    return this.http.get('http://localhost:8082/resume/allJobs/get')
  }
}
