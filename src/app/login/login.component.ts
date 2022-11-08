import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {LoginService} from '../service/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usericon = faUser;
  passIcon = faLock;
  arrowIcon = faCircleChevronRight
  email:any;
  password : any;


  constructor(public loginservice : LoginService) { }

  getemail(email:any)
  {
    console.log(email.target.value);
    
    this.email = email.target.value;
  }
  getpass(pass:any)
  {
    console.log(pass.target.value);
    
    this.password= pass.target.value;
  }

  ngOnInit(): void {
  }
  clicklogin()
  {
    console.log(this.email,this.password);
    
    this.loginservice.postlogin(this.email,this.password).subscribe((res:any)=>
    {
      if(res)
      {
        console.log(res);

      }
    })
  }

}
