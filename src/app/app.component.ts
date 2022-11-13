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
}
