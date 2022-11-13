import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-job-post',
  templateUrl: './edit-job-post.component.html',
  styleUrls: ['./edit-job-post.component.css']
})
export class EditJobPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data:any)
  {
    console.log(data);
    
  }

}
