import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import Swal from 'sweetalert2/dist/sweetalert2.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'naukri_com';
  isloggedin: boolean = false;
  user = localStorage.getItem('user') 
  seek : boolean = false;
  rec :any = "JOB_POSTER";


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
  
  constructor(private router: Router){ }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    let user = localStorage.getItem('user') 
    if(user == "JOB_SEEKER")
    {
      this.seek = true
    }

    
    if (token) {
      console.log(token);
      this.isloggedin = true
    }

  }

  logout()
  { console.log("out");
  
    localStorage.removeItem('token');
    this.Toast.fire({
      icon: 'success',
      title: 'Signed Out successfully'
    })
    this.router.navigate(['/login'])
  }

  move()
  {
    let user = localStorage.getItem('user')
    if(user == "JOB_SEEKER")
    {
      this.router.navigate(['/seekprofile'])
    }
    else{
      this.router.navigate(['/recprofile'])
    }
  }


}
