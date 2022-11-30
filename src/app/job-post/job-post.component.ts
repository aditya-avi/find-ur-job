import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {JobService} from '../service/job.service'
import {Router} from "@angular/router"


@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
skills : any =[]
arrowIcon = faCircleChevronRight
value:string = ''

  constructor(public jobservice : JobService,private router: Router) { }

  ngOnInit(): void {
  }

  addskill(data:any)
  {
    if(data && data.target.value !=null && data.target.value != '')
    {
      console.log(data.target.value);
    this.skills.push(data.target.value)
    }
  }
  saveskill()
  {
    this.value=''
  }
  onClickSubmit(data:any)
  {
    console.log(data);
    
    this.jobservice.postjob(data,this.skills).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/recprofile'])
      
    })

    console.log(data.target);
    
  }

  imgclick(data:any)
  {
    console.log(data.target.name);
    let newArray = [];
    for (let i = 0; i < this.skills.length; i++) {
      if (this.skills[i] !== data.target.name) {
        newArray.push(this.skills[i]);
      }
    }
    console.log(newArray);
    
   this.skills = newArray

    
    
  }

}
