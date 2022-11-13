import { Component, OnInit,ViewChild } from '@angular/core';
import {ResumeService} from '../service/resume.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  reshead:any;
  skills:any;
  dob:any;
  address:any;
  pin:any;
  hometown:any
  mstatus:any
  gender:any
  selectedDeg : any;
  flagshow:boolean=false;
  projshow = true;
  clearfield = false;
  compname:any;
  compdesig:any;
  comped:any;
  hidebutton:boolean = true;
  value1:string = ''
  value2:string = ''
  value3:string = ''
  value4:string = ''
  value5:string= ''
  value6:string= ''
  value7:string= ''



  degrees = [
    {id: 1, name: "SSC"},
    {id: 2, name: "HSC"},
    {id: 3, name: "Graduation"},
    {id: 4, name: "Post Graduation"},
    {id: 5, name: "Others"}
 ];
 pdetails = [
    {
      endDate: "",
      loginI: localStorage.getItem('token'),
      projectDescription: "",
      projectName: "",
      startDate: ""
    }
 ];

  pdetails1 : any = [];

  empdetails = [
     "cname",
     "cdesig",
     "ced",
     ["pdet"]
 ];
  constructor(public resumeservice : ResumeService) { }

  
  ngOnInit(): void {
    console.log(Date.now());
    
  }

  savereshead(data:any)
  {
    this.reshead = data.target.value
  }

  saveskills(data:any)
  {
    this.skills = data.target.value
  }

  savedob(data:any)
  {
    this.dob = data.target.value
  }

  saveaddress(data:any)
  {
    this.address = data.target.value
  }
  savepin(data:any)
  {
    this.pin = data.target.value
  }

  savehometown(data:any)
  {
    this.hometown= data.target.value
  }

  getp(data : any)
  {
this.mstatus = data.target.value    
  }
  marchange(data:any)
  {
    console.log(data.target.value);
    
  }

  genderselect(data:any)
  {
    this.gender = data.target.value
    
  }

  savekeyskills()
  {
    
    this.resumeservice.saveskills(this.address,this.dob,this.gender,this.hometown,this.mstatus,this.pin,this.reshead,this.skills).subscribe((res)=>
    {
      
      console.log(res);
      
    })
    // savekeyskills(address:any,dob:any,gender:any,hometown:any,mstatus:any,pin:any,reshead:any,skills:any)
  }
  degreeselect(data:any)
  {
    this.flagshow = true
    this.selectedDeg=data.target.value;
    console.log(data.target.value);
    
    this.degrees.forEach((value,index)=>{
      if(value.id==data.target.value) this.degrees.splice(index,1);
  });
  }

  savedegree(data:any)
  {
    this.flagshow = false
    console.log(data);
    this.resumeservice.saveeducation(data,this.selectedDeg).subscribe((res :any)=>
    {
      console.log(res);
      // if(res.message!= null && res.success!= null)
      // {
      // }
    })
  }

  getcomped(data)
  {
    this.comped
    =data.target.value
  }

  getcompdesig(data)
  {
    this.compdesig= data.target.value
  }

  getcompname(data)
  {
    this.compname = data.target.value
  }

  saveped(data:any)
  {
    if(data)
    {
      this.pdetails[0].endDate = data.target.value
    }
  }

  savepsd(data:any)
  {
    this.pdetails[0].startDate = data.target.value
  }

  savepdesc(data:any)
  {
    this.pdetails[0].projectDescription = data.target.value

  }

  savepname(data:any)
  {
    this.pdetails[0].projectName = data.target.value

  }

  saveproj()
  {
this.hidebutton = false   
    this.pdetails1.push(this.pdetails)
    console.log(this.pdetails);
    console.log(this.pdetails1);
    this.value1=''
    this.value2=''
    this.value3=''
    this.value4=''
  }

  savecompdetails()
  {
    
    this.resumeservice.saveemploymenthistory(this.compname,this.compdesig,this.comped,this.pdetails1).subscribe((res)=>
    {
      console.log(res);
      
    })
  }

  addproj()
  {
    this.clearfield = true
    
  }
}
