import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  saveskills(address:any,dob:any,gender:any,hometown:any,maritalstatus:any,pincode:any,psum:any,skills:any)
{
  return this.http.post('http://localhost:8082/resume/addSkillsAndGeneralDetails/post',{
    "address": address,
    "dateOfBirth": dob,
    "gender": gender,
    "homeTown": hometown,
    "loginId": localStorage.getItem("token"),
    "martialStatus": maritalstatus,
    "pinCode": pincode,
    "profileSummary": psum,
    "skills": skills
  }) 
}

saveeducation(data:any,degreeId:any)
{
  return this.http.post('http://localhost:8082/resume/addSkillsAndGeneralDetails/post',{
    
      "degreeId": degreeId,
      "endDate": data.ed_year,
      "institutionId": 0,
      "isHighest": "ishigh",
      "loginId": localStorage.getItem("token"),
      "major": data.marks,
      "startDate": data.st_year
    
  }) 
}

saveemploymenthistory(compname,compdesig,comped,pdetails1)
{
  console.log(compname,compdesig,comped,pdetails1);
  
  return this.http.post('http://localhost:8082/resume/addUserEmploymentHistory/post',{
    "active": "Y",
    "designation": compdesig,
    "employer": compname,
    "endDate": comped,
    "loginId": localStorage.getItem("token"),
    "projectDetails": pdetails1,
    "role": "JOB_SEEKER",
    "startDate": "2022-11-10T05:18:00.583Z"
  }) 
}

geteducationdetails()
{
  return this.http.post('http://localhost:8082/resume/profileDetails/educationDetails/get',{"loginId": localStorage.getItem('token')})
}
getuseremploymenthistory()
{
  return this.http.post('http://localhost:8082/resume/profileDetails/employementHistory/get',{"loginId": localStorage.getItem('token')})
}
getuserfetails()
{
  return this.http.post('http://localhost:8082/resume/profileDetails/skills/get',{"loginId": localStorage.getItem('token')})
}
}
