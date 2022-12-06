import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../service/utility.service'

@Component({
  selector: 'app-fyb-trend',
  templateUrl: './fyb-trend.component.html',
  styleUrls: ['./fyb-trend.component.css']
})
export class FybTrendComponent implements OnInit {

  constructor(private utilityservice : UtilityService) { }
  statsdata : any
  ngOnInit(): void {
    this.utilityservice.getststs().subscribe((res:any)=>
    {
      console.log(res);
      
      this.statsdata = res.jobsAppliedStatDetailsList
    })
  }

}
