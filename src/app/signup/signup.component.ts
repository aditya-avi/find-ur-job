import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import {SignupService} from '../service/signup.service';
import {Router} from "@angular/router"





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

  constructor(public signupservice : SignupService,private router: Router) { 

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

  checkemail(data)
  {
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

  onClickSubmit(data:any) {
    console.log(data);
    this.signupservice.postsignup(data,this.prof).subscribe((res:any)=>
    {
      console.log(res);
      this.router.navigate(['/profile'])
      
    })

    
 }

}
