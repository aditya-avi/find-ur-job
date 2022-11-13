import { Component, OnInit } from '@angular/core';
import {JobService} from '../service/job.service'
import { UtilityService } from '../service/utility.service'

@Component({
  selector: 'app-cand-home',
  templateUrl: './cand-home.component.html',
  styleUrls: ['./cand-home.component.css']
})
export class CandHomeComponent implements OnInit {

  
  data:any;
  bgimgdata:any;
  resp:any = {
    "companyjobsAndDetailsList": [
      {
        "active": "string",
        "companyId": 0,
        "companyJobDetailsEntity": {
          "active": "string",
          "ctcOffered": 0,
          "endDate": "2022-11-12T15:43:45.208Z",
          "jobCreationDate": "2022-11-12T15:43:45.208Z",
          "jobDetailsId": 0,
          "jobId": 0,
          "jobLocation": "string",
          "salaryPerHour": 0,
          "skillsRequired": "string"
        },
        "jobDescription": "string",
        "jobId": 0,
        "jobTitle": "string",
        "jobTypeId": 0
      },
      {
        "active": "string",
        "companyId": 0,
        "companyJobDetailsEntity": {
          "active": "string",
          "ctcOffered": 0,
          "endDate": "2022-11-12T15:43:45.208Z",
          "jobCreationDate": "2022-11-12T15:43:45.208Z",
          "jobDetailsId": 0,
          "jobId": 0,
          "jobLocation": "string",
          "salaryPerHour": 0,
          "skillsRequired": "string"
        },
        "jobDescription": "string",
        "jobId": 0,
        "jobTitle": "string",
        "jobTypeId": 0
      },
      {
        "active": "string",
        "companyId": 0,
        "companyJobDetailsEntity": {
          "active": "string",
          "ctcOffered": 0,
          "endDate": "2022-11-12T15:43:45.208Z",
          "jobCreationDate": "2022-11-12T15:43:45.208Z",
          "jobDetailsId": 0,
          "jobId": 0,
          "jobLocation": "string",
          "salaryPerHour": 0,
          "skillsRequired": "string"
        },
        "jobDescription": "string",
        "jobId": 0,
        "jobTitle": "string",
        "jobTypeId": 0
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

  constructor(public jobservice : JobService,public utility : UtilityService) { }
  ngOnInit(): void {
    this.utility.getimg().subscribe((res)=>
    {
      console.log(res[0].url);
      this.bgimgdata = res;
      
    })
    // window.location.reload()
    
    console.log(this.resp.companyjobsAndDetailsList[0].companyJobDetailsEntity.skillsRequired);
    
    this.jobservice.getjobs().subscribe((res)=>
    {
      console.log(res);
      this.data = res
      
    })
  }
  jobdetail()
  {

  }

}
