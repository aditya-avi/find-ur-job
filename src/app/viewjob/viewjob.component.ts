import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {JobService} from '../service/job.service'

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {

  skills : any =[]
  arrowIcon = faCircleChevronRight
  value:string = ''
  dis :boolean=true
  
    constructor(public jobservice : JobService) { }
  
    ngOnInit(): void {
    }
  
    editjob()
    {
      this.dis = false
    }

    savejob()
    {
      this.dis = true
    }


  

}
