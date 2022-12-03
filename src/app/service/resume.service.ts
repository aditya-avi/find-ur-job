import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  saveskills(address:any,dob:any,gender:any,hometown:any,maritalstatus:any,pincode:any,psum:any,skills:any,mstatus:any)
{
  const skill = skills.split(",");
  // console.log(skill);
  
  return this.http.post('http://localhost:8082/resume/addSkillsAndGeneralDetails/post',{
    "address": address,
    "dateOfBirth": dob,
    "gender": gender,
    "homeTown": hometown,
    "loginId": localStorage.getItem("token"),
    "martialStatus": mstatus,
    "pinCode": pincode,
    "profileSummary": psum,
    "skills": skill
  }) 
}

saveeducation(data:any,degreeId:any,instid)
{
  return this.http.post('http://localhost:8082/resume/addUserEducationDetails/post',{
    
      "degreeId": degreeId,
      "endDate": data.ed_year,
      "institutionId": instid,
      "isHighest": data.ishigh,
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

resumeup(data)
{
  const id = localStorage.getItem('token')
  // const headers = new Headers({ 'Content-Type': 'multipart/form-data' });
  const headers= new HttpHeaders()
.set('Content-Type', 'multipart/form-data')
//  const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

 return this.http.post('http://localhost:8082/resume/uploadResume/',{"type":data})
}

downresume(id)
{
  const headers = new HttpHeaders({ 'Accept': 'application/pdf' });

  return this.http.get('http://localhost:8082/resume/downloadResume/'+id)
}

getbasicdet()
{
  const id = localStorage.getItem('token')
  return this.http.get('http://localhost:8083/job/recruiterBasicDetailsByLoginId/get/'+id)
}

editeducationdetails(degId,ed,iid,ih,major,stdate,edid)
{
  return this.http.post('http://localhost:8082/resume/editUserEducationDetails/post',{
    "degreeId": degId,
    "endDate": ed,
    "institutionId": iid,
    "isHighest": ih,
    "loginId": localStorage.getItem('token'),
    "major": major,
    "startDate": stdate,
    "userEducationId": edid
  })
}
}
