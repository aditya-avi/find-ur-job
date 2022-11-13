import { Component, OnInit } from '@angular/core';
import { faUser,faLock,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import {LoginService} from '../service/login.service'
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../notification.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from "@angular/router"





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


  constructor(public loginservice : LoginService,private toastr: ToastrService,private toast : NotificationService,private router: Router) { }
  Toast :any= Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: true,
    timer: 3000000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
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
      if(res  &&  res.validationErrors == null && res.success == true)
      {
        console.log(res);
        // this.toast.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
        // Swal.fire('Logged In!','success');
        this.Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        localStorage.setItem('token',this.email)
        this.router.navigate(['/candhome'])
        .then(()=>
        {
          setTimeout(() => {
            window.location.reload()
        }, 2500);
        })
      }
      else if(res.success == null || res.message == null)
      {
        Swal.fire(res.validationErrors[0].errorDescription + ' &nbsp;!');
      }
    })
  }

}
