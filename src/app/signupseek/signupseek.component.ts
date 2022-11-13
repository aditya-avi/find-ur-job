import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';
import {SignupService} from '../service/signup.service'
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

   
 
   constructor(public signupservice : SignupService) { 
 
   }
 
 
 
   ngOnInit(): void {
    
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
 
   onClickSubmit(data:any) {
     console.log(data);
     this.signupservice.postsignup(data,this.prof).subscribe((res)=>
     {
       console.log(res);
       
     })
 
     
     alert("Entered Email id : " + data.emailid);
  }

}
