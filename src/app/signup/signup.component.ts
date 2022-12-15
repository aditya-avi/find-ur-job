import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight, faL } from '@fortawesome/free-solid-svg-icons';
import {SignupService} from '../service/signup.service';
import {Router} from "@angular/router"
import {UtilityService} from '../service/utility.service'





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

selected_value = null;
 jobRecruiter = false;
  usericon = faUser;
  passIcon = faLock;
  arrowIcon = faCircleChevronRight
  profile : any;
  prof:string="rec";
  userid:any
  email:any;
  useriderr:boolean=false
  emailerr:boolean=false
  err : boolean = true
  perr : boolean = false
  serr : boolean = false
  merr : boolean = false
  paerr : boolean = false
  mainerr : boolean = false
  fnameerr : boolean = false
  lnameerr : boolean = false


  compdata : any;
  selectedcomp : any;

  constructor(public signupservice : SignupService,private router: Router,private utilityservice : UtilityService ) { 
 
  }  


  


  ngOnInit(): void {
   this.utilityservice.getcompanydetails().subscribe((res:any)=>
   {
    console.log(res.companyDetails);
    this.compdata = res.companyDetails
    
   })
  }

  checkfname(data)
  {
    var nameFormat = /^[A-Za-z]+$/;
    console.log(data.target.value);
    
    if(data.target.value.match(nameFormat))
{
  this.fnameerr = false
  console.log('match');
  
}
else{
  this.fnameerr = true
}  }


  checklname(data)
  {
    var nameFormat = /^[A-Za-z]+$/;
    console.log(data.target.value);
    
    if(data.target.value.match(nameFormat))
{
  this.lnameerr = false
  console.log('match');
  
}
else{
  this.lnameerr = true
}
console.log(this.lnameerr);

  }

  checkphone(data)
  {
   console.log('call');
   
   const d = data.target.value

   console.log(d.length);
   if(d.length!=10)
   {
     this.perr = true;
   }
   else
   {
     this.perr = false
   }
  }


  checkuserid(data)
  {
    this.signupservice.validateuserid(data.target.value).subscribe((res:any)=>
    {
      console.log(res);
      if(res==null || res.success==null)
      {
        this.useriderr = true
        console.log(res.validationErrors[0].errorDescription);
      }
      else
      {
        this.useriderr = false
      }
      
    })
  }

   checkemail(data)
   {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(data.target.value.match(mailformat))
{
  this.merr = false;

  this.signupservice.validateuseremail(data.target.value).subscribe((res:any)=>
     {
       console.log(res);
       if(res==null || res.success==null)
       {
         this.emailerr = true
         console.log(res.validationErrors[0].errorDescription);
       }
       else
       {
         this.emailerr = false
       }
       
     })
}

else
{
  this.merr = true;
}
     
   }

   checkpass(data:any)
   {
    
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
;
    if(data.target.value.match(regex))
    {
      this.paerr = false
    }
    else
    {
      this.paerr = true
    }
  
  
   }
getf(dta:any)
{
  if(dta.target.value == "recruiter")
  {
    this.profile = true
  }
  else if(dta.target.value == "seeker")
  {
    this.profile = false
  }
  
}

relog()
{
  this.router.navigate(['/login'])
}

compselect(data)
{
  console.log(data.target.value);

  for(let i in this.compdata)
  {
    if(data.target.value == this.compdata[i].companyId)
    {
      console.log(this.compdata[i]);
      this.selectedcomp = this.compdata[i];

    }
    
  }
  
}

  onClickSubmit(data:any) {
    console.log(data);

    if(data.address.length==0 || data.contact.length==0 || data.dob ==0 || data.email.length ==0 || data.fname.length ==0 || data.lname.length ==0 || data.password.length ==8 || data.userid.length ==0 || this.fnameerr || this.lnameerr)
    {
     this.mainerr = true
    }
    else
    {
    this.signupservice.postsignup(data,this.prof,this.selectedcomp).subscribe((res:any)=>
    {
      console.log(res);
      
      const id = res.message.split(" ")[1]
      console.log(id);
      localStorage.setItem('token',id)
      
      console.log(res);
      this.router.navigate(['/profile'])
      
    })
  }

    
 }

}
