import { Component, OnInit } from '@angular/core';
import { faLocationDot,faEnvelope,faPhone,faPersonHalfDress,faCakeCandles,faHomeUser } from '@fortawesome/free-solid-svg-icons';
import {RecruiterService} from '../service/recruiter.service'
import { Router } from '@angular/router';
import {ResumeService} from '../service/resume.service'
// import { ResumeService } from './../service/resume.service';

@Component({
  selector: 'app-recprofile',
  templateUrl: './recprofile.component.html',
  styleUrls: ['./recprofile.component.css']
})
export class RecprofileComponent implements OnInit {

  jobs :any

  constructor(public recruiterservice : RecruiterService,public router : Router, public resumeService : ResumeService) { }

  arrowIcon = faLocationDot
  emailicon = faEnvelope
  phoneicon = faPhone
  gendericon = faPersonHalfDress
  dobicon = faCakeCandles
  hometownicon = faHomeUser

  eddetails : any = {
    "educationDetails": [
      {
        "address": "string",
        "degree": "string1",
        "degreeDescription": "string",
        "endDate": "2022-11-25T19:25:53.097Z",
        "firstName": "string",
        "institutionName": "string",
        "isHighestEducaton": "string",
        "lastName": "string",
        "location": "string",
        "major": "string",
        "pinCode": "string",
        "startDate": "2022-11-25T19:25:53.097Z"
      },
       {
        "address": "string",
        "degree": "string2",
        "degreeDescription": "string",
        "endDate": "2022-11-25T19:25:53.097Z",
        "firstName": "string",
        "institutionName": "string",
        "isHighestEducaton": "string",
        "lastName": "string",
        "location": "string",
        "major": "string",
        "pinCode": "string",
        "startDate": "2022-11-25T19:25:53.097Z"
      },
       {
        "address": "string",
        "degree": "string3",
        "degreeDescription": "string",
        "endDate": "2022-11-25T19:25:53.097Z",
        "firstName": "string",
        "institutionName": "string",
        "isHighestEducaton": "string",
        "lastName": "string",
        "location": "string",
        "major": "string",
        "pinCode": "string",
        "startDate": "2022-11-25T19:25:53.097Z"
      },
       {
        "address": "string",
        "degree": "string4",
        "degreeDescription": "string",
        "endDate": "2022-11-25T19:25:53.097Z",
        "firstName": "string",
        "institutionName": "string",
        "isHighestEducaton": "string",
        "lastName": "string",
        "location": "string",
        "major": "string",
        "pinCode": "string",
        "startDate": "2022-11-25T19:25:53.097Z"
      },
       {
        "address": "string",
        "degree": "string5",
        "degreeDescription": "string",
        "endDate": "2022-11-25T19:25:53.097Z",
        "firstName": "string",
        "institutionName": "string",
        "isHighestEducaton": "string",
        "lastName": "string",
        "location": "string",
        "major": "string",
        "pinCode": "string",
        "startDate": "2022-11-25T19:25:53.097Z"
      }
    ],
    "message": "string",
    "success": true,
    "validationErrors": [
      {
        "errorCode": "string",
        "errorDescription": "string",
        "fieldName": "string",
        "fieldValue": {}
      }
    ]
  }
  emphistory : any = {
    "employmentDetails": [
      {
        "currentActiveJob": "string1",
        "designation": "strin1g",
        "employer": "string11",
        "firstName": "string",
        "jobEndDate": "2022-11-25T19:25:53.101Z",
        "jobRole": "string",
        "jobStartDate": "2022-11-25T19:25:53.101Z",
        "lastName": "string",
        "projectDescription": "string",
        "projectEndDate": "2022-11-25T19:25:53.101Z",
        "projectName": "string",
        "projectStartDate": "2022-11-25T19:25:53.101Z"
      }, {
        "currentActiveJob": "string2",
        "designation": "strin2g",
        "employer": "string22",
        "firstName": "string",
        "jobEndDate": "2022-11-25T19:25:53.101Z",
        "jobRole": "string",
        "jobStartDate": "2022-11-25T19:25:53.101Z",
        "lastName": "string",
        "projectDescription": "string",
        "projectEndDate": "2022-11-25T19:25:53.101Z",
        "projectName": "string",
        "projectStartDate": "2022-11-25T19:25:53.101Z"
      }, {
        "currentActiveJob": "string3",
        "designation": "strin3g",
        "employer": "string33",
        "firstName": "string",
        "jobEndDate": "2022-11-25T19:25:53.101Z",
        "jobRole": "string",
        "jobStartDate": "2022-11-25T19:25:53.101Z",
        "lastName": "string",
        "projectDescription": "string",
        "projectEndDate": "2022-11-25T19:25:53.101Z",
        "projectName": "string",
        "projectStartDate": "2022-11-25T19:25:53.101Z"
      }, {
        "currentActiveJob": "string4",
        "designation": "strin4g",
        "employer": "string44",
        "firstName": "string",
        "jobEndDate": "2022-11-25T19:25:53.101Z",
        "jobRole": "string",
        "jobStartDate": "2022-11-25T19:25:53.101Z",
        "lastName": "string",
        "projectDescription": "string",
        "projectEndDate": "2022-11-25T19:25:53.101Z",
        "projectName": "string",
        "projectStartDate": "2022-11-25T19:25:53.101Z"
      }
    ],
    "message": "string",
    "success": true,
    "validationErrors": [
      {
        "errorCode": "string",
        "errorDescription": "string",
        "fieldName": "string",
        "fieldValue": {}
      }
    ]
  }
  mainskills : any = {
    "message": "string",
    "skills": "string",
    "success": true,
    "validationErrors": [
      {
        "errorCode": "string",
        "errorDescription": "string",
        "fieldName": "string",
        "fieldValue": {}
      }
    ]
  }

  ngOnInit(): void {
    
    // console.log(this.eddetails.educationDetails);
    

    let id = localStorage.getItem('token')
    this.recruiterservice.getJobPostedByRec(id).subscribe((res:any)=>
    {
      console.log(res);
      this.jobs = res.companyjobsAndDetailsList
    })

    this.resumeService.geteducationdetails().subscribe((res:any)=>
    {
      this.eddetails = res.educationDetails
    })
    
  }

  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  jobdelete(id)
  {
    this.recruiterservice.deletejob(id).subscribe((res)=>
    {
      console.log(res);
      
    })
  }

  reviewjob(data)
  {
    // console.log(data);
    
    // this.router.navigate(['viewjob'], {state: JSON.stringify(data)});

    this.router.navigate(
      ['viewjob'],
      {
        state :{data}
      }
    )

    
  }

  downresume()
  {
    const id = localStorage.getItem('token')
    this.resumeService.downresume(id).subscribe((res)=>
    {
      console.log(res);
      
    })
  }

}
