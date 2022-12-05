import { Component, OnInit } from '@angular/core';
import { faLocationDot,faEnvelope,faPhone,faPersonHalfDress,faCakeCandles,faHomeUser } from '@fortawesome/free-solid-svg-icons';
import {JobService} from '../service/job.service'
import {ResumeService} from '../service/resume.service'

@Component({
  selector: 'app-profileseek',
  templateUrl: './profileseek.component.html',
  styleUrls: ['./profileseek.component.css']
})
export class ProfileseekComponent implements OnInit {

  jobsapplied : any;

  eddetails : any 

  emphistory : any 

  mainskills : any 

  constructor(public jobservice : JobService,public resumeservice : ResumeService) { }

  arrowIcon = faLocationDot
  emailicon = faEnvelope
  phoneicon = faPhone
  gendericon = faPersonHalfDress
  dobicon = faCakeCandles
  hometownicon = faHomeUser

  basicd :any;
  edud : any;

  ssc:any=[]
  hsc:any=[]
  grad:any=[]
  postgrad:any=[]
  other:any=[]

  assc:boolean=false
  ahsc:boolean=false
  agrad:boolean=false
  apostgrad:boolean=false
  aother:boolean=false

  essc:boolean=true
  ehsc:boolean=true
  egrad:boolean=true
  epostgrad:boolean=true
  eother:boolean=true


  projectdetails : any 

  ngOnInit(){


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

    this.resumeservice.geteducationdetails().subscribe((res:any)=>
    {
      console.log(res.educationDetails);
      this.eddetails = res
      
    })
    // console.log(this.eddetails.educationDetails[0].startDate.toDateString(),'dateee');

    this.jobservice.jobapplied().subscribe((res : any)=>
    {
      console.log(res.jobsApplied[0].companyName);
      this.jobsapplied = res.jobsApplied
      
    })

    this.resumeservice.getbasicdet().subscribe((res:any)=>
    {
      console.log(res);
      this.basicd = res
      
    })

    

  console.log(this.eddetails);
  
  setTimeout(() => this.setdetails(), 1000);    
    console.log(this.hsc,"hsc");
    console.log(this.hsc,"ssc");

    this.resumeservice.getuseremploymenthistory().subscribe((res:any)=>
    {
      console.log(res,'seekeee');
      this.emphistory = res
      
    })
    


  }

  setdetails()
  {
    for(let i in this.eddetails.educationDetails)
    {
      console.log(i,this.eddetails.educationDetails[i].degree,'ccc');
      if(this.eddetails.educationDetails[i].degree == "SSC")
      {
        this.ssc.push(this.eddetails.educationDetails[i])
      }

      if(this.eddetails.educationDetails[i].degree == "HSC")
      {
        this.hsc.push(this.eddetails.educationDetails[i])
      }

      if(this.eddetails.educationDetails[i].degree == "Graduation")
      {
        this.grad.push(this.eddetails.educationDetails[i])
      }

      if(this.eddetails.educationDetails[i].degree == "Post Graduation")
      {
        this.postgrad.push(this.eddetails.educationDetails[i])
      }

      if(this.eddetails.educationDetails[i].degree == "SSC")
      {
        this.other.push(this.eddetails.educationDetails[i])
      }
    

}
  }

  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  openCity2(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


showproj : boolean = false
// projects : any;
projdesc : any
projenddate:any
projname : any
projstdate : any

spproject : any

  getempprojects(data)
  {
    console.log(data,'dataaaa');
    
    this.resumeservice.getprojectdetails(data).subscribe((res:any)=>
    {

      console.log(res);
      this.projectdetails = res.projectHistories
      this.projdesc = 
      this.showproj = true
      
    })
  }

  projectno(i)
  {
    console.log(i);
    
    this.spproject = i
  }

  downresume()
  {
    // const id = localStorage.getItem('token')
    console.log(this.basicd.userId);
    
    this.resumeservice.downresume(this.basicd.userId).subscribe((res)=>
    {
      console.log(res);
      
    })
  }




  showssc()
  {
    
    this.assc = true
    this.ahsc = false
    this.agrad = false
    this.apostgrad = false
    this.aother = false

  }
  showhsc()
  {
    this.assc = false
    this.ahsc = true
    this.agrad = false
    this.apostgrad = false
    this.aother = false
  }
  showgrad()
  {
    this.assc = false
    this.ahsc = false
    this.agrad = true
    this.apostgrad = false
    this.aother = false
  }
  showpostgrad()
  {
    this.assc = false
    this.ahsc = false
    this.agrad = false
    this.apostgrad = true
    this.aother = false
  }
  showother()
  {
    this.assc = false
    this.ahsc = false
    this.agrad = false
    this.apostgrad = false
    this.aother = true
  }

  editssc()
  {
    this.essc = false
    this.ehsc = true
    this.egrad = true
    this.epostgrad = true
    this.eother = true
  }

  edithsc()
{
  this.essc = true
    this.ehsc = false
    this.egrad = true
    this.epostgrad = true
    this.eother = true
}

editgrad()
{
  this.essc = true
    this.ehsc = true
    this.egrad = false
    this.epostgrad = true
    this.eother = true
}

editpostgrad()
{
  this.essc = true
    this.ehsc = true
    this.egrad = true
    this.epostgrad = false
    this.eother = true
}

editother()
{
  this.essc = true
  this.ehsc = true
  this.egrad = true
  this.epostgrad = true
  this.eother = false
}



jd:any; 
in:any;
major:any;
stdate:any;
eddate:any;
add:any;
pin:any;
loc:any;

getjd(data)
{
  this.jd = data.target.value;
  // console.log(data.target.value);
  
}

getin(data)
{
  this.in = data.target.value
}

getmajor(data)
{
  this.major = data.target.value
}

getstdate(data)
{
  this.stdate = data.target.value
}

geteddate(data)
{
  this.eddate = data.target.value
}

getadd(data)
{
  this.add = data.target.value
}

getpin(data)
{
  this.pin = data.target.value
}

getloc(data)
{
  this.loc = data.target.value
}

editdata(deg)
{

  let edid;
  let act="Y";
  console.log(deg);
  if(deg == 1)
  {
    edid = this.eddetails.educationDetails[0].userEducationHistoryId
  }
  if(deg == 2)
  {
    edid = this.eddetails.educationDetails[1].userEducationHistoryId
  }
  if(deg == 3)
  {
    edid = this.eddetails.educationDetails[2].userEducationHistoryId
  }
  if(deg == 4)
  {
    edid = this.eddetails.educationDetails[3].userEducationHistoryId
  }
  if(deg == 5)
  {
    edid = this.eddetails.educationDetails[4].userEducationHistoryId
  }
  
  
  console.log(edid);
  
  this.resumeservice.editeducationdetails(deg,this.eddate,this.in,act,this.major,this.stdate,edid).subscribe(res =>
    {
      console.log(res);
      
    })
}
}
