import { Component, OnInit } from '@angular/core';
import { faLocationDot,faEnvelope,faPhone,faPersonHalfDress,faCakeCandles,faHomeUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profileseek',
  templateUrl: './profileseek.component.html',
  styleUrls: ['./profileseek.component.css']
})
export class ProfileseekComponent implements OnInit {

  constructor() { }

  arrowIcon = faLocationDot
  emailicon = faEnvelope
  phoneicon = faPhone
  gendericon = faPersonHalfDress
  dobicon = faCakeCandles
  hometownicon = faHomeUser

  ngOnInit(): void {
  }

}
