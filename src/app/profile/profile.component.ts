import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getp(data : any)
  {
    console.log(data.target.value);
    
  }

  submitf(data:any)
  {
    console.log(data);
    
  }

}
