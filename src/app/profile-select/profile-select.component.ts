import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"


@Component({
  selector: 'app-profile-select',
  templateUrl: './profile-select.component.html',
  styleUrls: ['./profile-select.component.css']
})
export class ProfileSelectComponent implements OnInit {

  constructor(private router: Router) { }

  torec()
  {
    this.router.navigate(['/register'])
  }

  toseek()
  {
    this.router.navigate(['/seekersignup'])

  }

  ngOnInit(): void {
  }

}
