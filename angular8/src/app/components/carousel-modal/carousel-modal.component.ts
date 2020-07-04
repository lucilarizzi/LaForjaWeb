import { Component, OnInit } from '@angular/core';
import { NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';

@Component({
  selector: 'app-carousel-modal',
  templateUrl: './carousel-modal.component.html',
  styleUrls: ['./carousel-modal.component.css']
})
export class CarouselModalComponent implements OnInit {

  constructor() { }

  tinySliderConfig: NgxTinySliderSettingsInterface;
 
  ngOnInit() {
    this.tinySliderConfig = {
      arrowKeys: true,
      autoWidth: true,
      gutter: 10,
      controlsText: ['<', '>']
    },
    {
      "container": "#fixedWidth",
      "fixedWidth": 400,
      "swipeAngle": false,
      "speed": 400
    };
  }
  }