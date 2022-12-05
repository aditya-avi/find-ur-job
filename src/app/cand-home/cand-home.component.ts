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
  resp:any 

  constructor(public jobservice : JobService,public utility : UtilityService) { }
  ngOnInit() {
    // window.location.reload()
    
    // console.log(this.resp.companyjobsAndDetailsList[0].companyJobDetailsEntity.skillsRequired);
    
    this.jobservice.getjobs().subscribe((res:any)=>
    {
      console.log(res.companyjobsAndDetailsList);
      this.data = res.companyjobsAndDetailsList
      
    })
  }
  jobdetail(data)
  {
    console.log(data);
    
    this.jobservice.applyjob(data).subscribe((res) =>
    {
      console.log(res);
      alert('Successfully Applied for the job')
    })
  }

}
