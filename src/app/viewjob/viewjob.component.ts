import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {JobService} from '../service/job.service'
import {Router,ActivatedRoute} from "@angular/router"
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {

  job_type = [
    {id: 1, name: "Permanent Full Time Oppourtunity"},
    {id: 2, name: "Contractual Oppourtunity"},
    {id: 3, name: "Intern Oppourtunity"},
 ];

  skills : any =[]
  arrowIcon = faCircleChevronRight
  value:string = ''
  dis :boolean=true
  data:any;
  appjobs : any = {
    "jobSeekerDetails": [
      {
        "email": "string",
        "firstName": "string",
        "lastName": "string",
        "mobileNumber": "string"
      },
      {
        "email": "string2",
        "firstName": "string2",
        "lastName": "string2",
        "mobileNumber": "string2"
      },
      {
        "email": "string3",
        "firstName": "string3",
        "lastName": "string3",
        "mobileNumber": "string3"
      },
      {
        "email": "string4",
        "firstName": "string4",
        "lastName": "string4",
        "mobileNumber": "string4"
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


  jobtitle : any
  ctc : any
  jd:any
  sph:any
  JL : any
  JT : any
  jobid : any;
  
    constructor(public jobservice : JobService,private route: ActivatedRoute ,private router : Router) {
      this.name = this.router.getCurrentNavigation().extras.state
     }
     name : any;
    ngOnInit(): void {
      console.log(this.name.data);
      this.skills = this.name.data.companyJobDetailsEntity.skillsRequired

      this.jobtitle = this.name.data.jobTitle
      this.jd = this.name.data.jobDescription
      this.JT = this.name.data.jobTypeId
      this.jobid = this.name.data.jobId
      this.ctc = this.name.data.companyJobDetailsEntity.ctcOffered
      this.sph = this.name.data.companyJobDetailsEntity.salaryPerHour
      this.JL = this.name.data.companyJobDetailsEntity.jobLocation

      if(this.jobid! = null || this.jobid!=undefined)
      {
        this.jobservice.seekersapp(this.jobid).subscribe((res : any)=>
        {
          this.appjobs = res.jobsApplied
        })
      }
    
      
      // console.log(history.state.data);
      // console.log(this.route.snapshot.queryParamMap.getAll('queryParams'));
      // this.data = this.route.snapshot.queryParamMap.get('data')[0];
      // console.log(this.data);
      // this.route.queryParams.subscribe(res=>
      //   {
      //     console.log(res);
          
      //   })
    }

    chjobtitle(data)
    {
      this.jobtitle = data.target.value
    }

    chctc(data)
    {
      this.ctc = data.target.value
    }

    chjd(data)
    {
      this.jd = data.target.value
    }

    chsph(data)
    {
      this.sph = data.target.value
    }

    chJL(data)
    {
      this.JL = data.target.value
    }

    chJT(data)
    {
      this.JT = data.target.value
    }

    selectjobtype(data)
    {

    }
  
    editjob()
    {
      this.dis = false
    }

    savejob()
    {
      this.dis = true
      this.jobservice.editjob(this.jobtitle,this.ctc,this.jd,this.JL,this.JT,this.sph,this.skills).subscribe(res=>
        {
          console.log(res);
          
        })
      
    }

acceptjob()
{
 this.jobservice.acceptjob(this.name.data.jobid).subscribe((res)=>
 {
  console.log(res);
  
 })

 
}

rejectjob()
{
  this.jobservice.rejectjob(this.name.data.jobId).subscribe((res)=>
  {
    console.log(res);
    
  })
}
  

}
