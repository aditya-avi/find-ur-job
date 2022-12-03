import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import {SignupService} from '../service/signup.service'
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';



@Component({
  selector: 'app-signupseek',
  templateUrl: './signupseek.component.html',
  styleUrls: ['./signupseek.component.css']
})
export class SignupseekComponent implements OnInit {

  selected_value = null;
  jobRecruiter = false;
   usericon = faUser;
   passIcon = faLock;
   arrowIcon = faCircleChevronRight
   profile : any;
   prof:string="seek";
   userid:any
   useriderr:boolean=false
   email:any;
   emailerr:boolean=false
   err : boolean = true
   perr : boolean = false
   serr : boolean = false
   merr : boolean = false
   paerr : boolean = false
   mainerr : boolean = false



   
 
   constructor(public signupservice : SignupService , private router : Router,private toast : NotificationService) { 
 
   }
 
   ngOnInit(): void {
    
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

 
 getf(dta:any)
 {
   if(dta.target.value == "recruiter")
   {
     this.profile = false
   }
   else if(dta.target.value == "seeker")
   {
     this.profile = true
   }
   
 }

 checkpass(data:any)
 {
  
  let regex = /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
  if(data.target.value.match(regex))
  {
    this.paerr = false
  }
  else
  {
    this.paerr = true
  }


 }
 
   onClickSubmit(data:any) {
     console.log(data);
    
 if(data.address.length<=5 || data.contact.length==0 || data.dob ==0 || data.email.length ==0 || data.fname.length <=2 || data.lname.length ==0 || data.password.length <=8 || data.userid.length ==0 )
 {
  this.mainerr = true
 }
 else
 {
  this.signupservice.postsignup(data,this.prof).subscribe((res:any)=>
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
