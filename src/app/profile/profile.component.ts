import { Component, OnInit,ViewChild } from '@angular/core';
import {ResumeService} from '../service/resume.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  arrowIcon = faCircleChevronRight

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
  instid:any;
  hidebutton:boolean = true;
  value1:string = ''
  value2:string = ''
  value3:string = ''
  value4:string = ''
  value5:string= ''
  value6:string= ''
  value7:string= ''
  file : any;

  maritals :any;



  degrees = [
    {id: 1, name: "SSC"},
    {id: 2, name: "HSC"},
    {id: 3, name: "Graduation"},
    {id: 4, name: "Post Graduation"},
    {id: 5, name: "Others"}
 ];

 institution = [
  {id: 1, name: "Giet"},
  {id: 2, name: "IIT delhi"},
  {id: 3, name: "NIT Delhi"},
  {id: 4, name: "BIT meshra"},
  {id: 5, name: "BITS Pilani"}
];
 pdetails = 
    {
      endDate: "",
      loginId: localStorage.getItem('token'),
      projectDescription: "",
      projectName: "",
      startDate: ""
    }
 ;

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

    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


    
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
    this.maritals = data.target.value;
    console.log(data.target.value);
    
  }

  genderselect(data:any)
  {
    this.gender = data.target.value
    
  }
gend :any = false
  savekeyskills()
  {
    
    this.resumeservice.saveskills(this.address,this.dob,this.gender,this.hometown,this.mstatus,this.pin,this.reshead,this.skills,this.maritals).subscribe((res)=>
    {
      
      console.log(res);
      this.gend = true
      console.log(this.gend);
      
      
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
  instituteselect(data :any)
  {
    this.instid = data.target.value
  }
savdeg : any = false
  savedegree(data:any)
  {
    this.flagshow = false
    console.log(data);
    this.resumeservice.saveeducation(data,this.selectedDeg,this.instid).subscribe((res :any)=>
    {
      console.log(res);
      this.savdeg = true
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
      this.pdetails.endDate = data.target.value
    }
  }

  savepsd(data:any)
  {
    this.pdetails.startDate = data.target.value
  }

  savepdesc(data:any)
  {
    this.pdetails.projectDescription = data.target.value

  }

  savepname(data:any)
  {
    this.pdetails.projectName = data.target.value

  }

  saveproj()
  {
this.hidebutton = false   
    this.pdetails1.push(this.pdetails )
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
  onChange(event) {
    this.file = event.target.files[0];
  }

  uploadresume()
  {
    console.log(this.file);
    
    this.resumeservice.resumeup(this.file).subscribe((res:any)=>
    {
      console.log(res);
      
    })
    
  }
}
