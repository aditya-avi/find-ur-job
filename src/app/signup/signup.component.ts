import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl } from '@angular/forms';



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
  

  constructor() { 

  }



  ngOnInit(): void {
   
  }



  onClickSubmit(data:any) {
    console.log(data);
    console.log(this.jobRecruiter);
    
    // alert("Entered Email id : " + data.emailid);
 }

}
