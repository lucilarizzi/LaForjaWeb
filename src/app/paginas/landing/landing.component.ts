import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public map: any = { lat: 51.678418, lng: 7.809007 };

  constructor() { }

  ngOnInit() {
  }

  




}
