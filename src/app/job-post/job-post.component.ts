import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {JobService} from '../service/job.service'

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
skills : any =[]
arrowIcon = faCircleChevronRight
value:string = ''

  constructor(public jobservice : JobService) { }

  ngOnInit(): void {
  }

  addskill(data:any)
  {
    console.log(data.target.value);
    this.skills.push(data.target.value)
    
  }
  saveskill()
  {
    this.value=''
  }
  onClickSubmit(data:any)
  {
    this.jobservice.postjob(data,this.skills).subscribe((res)=>{
      console.log(res);
      
    })

    console.log(data);
    
  }

  imgclick(data:any)
  {
    console.log(data.target.value);
    
  }

}
