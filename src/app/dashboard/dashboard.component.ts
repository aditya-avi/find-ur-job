import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../service/utility.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tjs : any =[
      {id:0,name:"Frontend Engineer"},
      {id:1,name:"SD2"},
      {id:2,name:"Data Analyst"},
      {id:3,name:"Azure Data Engineer"},
      {id:4,name:"Informatica Developer"},
      {id:5,name:"AWS Data Engineer"},
      {id:6,name:"Devops Engineer"},
      {id:7,name:"Java Developer"},
      {id:8,name:"MERN Developer"},
      {id:9,name:"UI/UX Designer"},
      {id:10,name:"Frontend Engineer"}

    ]

    tja = [
      {id:1,name:"SD2"},
      {id:3,name:"Azure Data Engineer"},
      {id:8,name:"MERN Developer"},
      {id:7,name:"Java Developer"},
      {id:4,name:"Informatica Developer"},
      {id:0,name:"Frontend Engineer"},
      {id:2,name:"Data Analyst"},
      {id:9,name:"UI/UX Designer"},
      {id:5,name:"AWS Data Engineer"},
      {id:6,name:"Devops Engineer"},
      {id:10,name:"Frontend Engineer"}

    ]

    tsin =[
      {id:0,name:"Kotlin"},
      {id:1,name:"java"},
      {id:2,name:"SpringBoot"},
      {id:3,name:"Angular"},
      {id:4,name:"React"},
      {id:5,name:"VUE"},
      {id:6,name:"Devops"},
      {id:7,name:"AWS"},
      {id:8,name:"MS Azure"},
      {id:9,name:"GoLang"},
      {id:10,name:"React Native"},
    ]

    tjp = [
      {id:0,name:"Frontend Engineer"},
      {id:2,name:"Data Analyst"},
      {id:4,name:"Informatica Developer"},
      {id:8,name:"MERN Developer"},
      {id:5,name:"AWS Data Engineer"},
      {id:9,name:"UI/UX Designer"},
      {id:1,name:"SD2"},
      {id:6,name:"Devops Engineer"},
      {id:3,name:"Azure Data Engineer"},
      {id:7,name:"Java Developer"},
      {id:10,name:"Frontend Engineer"}

    ]

    // randno :any = Math.floor(Math.random() * (10 - 0) + 10)

    r1 : number  ;
    r2 : number  ;
    r3 : number  ;
    r4 : number  ;
    nos : any;
    news : any ;

  constructor(public utilityservice : UtilityService) { }

  ngOnInit(): void {
    // console.log(Math.floor(Math.random() * 10) + 1 );

   
    this.myRandomInts(4,10)
    const [a,b,c,d] = this.nos
    this.r1 = a
    this.r2 = b
    this.r3 = c
    this.r4 = d
    // console.log(this.r1);
    
    this.utilityservice.getnews().subscribe((res:any)=>
    {
      // console.log(res);
      this.news = res.value
      console.log(this.news);
      
      
    })
  }

  myRandomInts(quantity, max){
    const set = new Set()
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * max) + 1)
    }
    console.log(set);
    this.nos = set
    
    return set
  }

}
