import { Component, OnInit } from '@angular/core';
import { faLocationDot,faEnvelope,faPhone,faPersonHalfDress,faCakeCandles,faHomeUser } from '@fortawesome/free-solid-svg-icons';
import {JobService} from '../service/job.service'

@Component({
  selector: 'app-profileseek',
  templateUrl: './profileseek.component.html',
  styleUrls: ['./profileseek.component.css']
})
export class ProfileseekComponent implements OnInit {

  jobsapplied : any;

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

  constructor(public jobservice : JobService) { }

  arrowIcon = faLocationDot
  emailicon = faEnvelope
  phoneicon = faPhone
  gendericon = faPersonHalfDress
  dobicon = faCakeCandles
  hometownicon = faHomeUser

  ngOnInit(): void {
    this.jobservice.jobapplied().subscribe((res : any)=>
    {
      console.log(res.jobsApplied[0].companyName);
      this.jobsapplied = res.jobsApplied
      
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


}
