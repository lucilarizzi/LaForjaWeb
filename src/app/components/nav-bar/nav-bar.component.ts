import { Component, OnInit, AfterViewInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  mostrarNav;
  constructor() {

    this.mostrarNav=false;
  }

  ngOnInit() {
  }



  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {

    if (window.pageYOffset > (window.innerHeight / 50)) {
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
      element.classList.remove('d-none');
      element.classList.remove('slideOutUp');
      element.classList.add('animated');
      element.classList.add('slideInDown');
      this.mostrarNav = true;
    }
    else if (window.pageYOffset < (window.innerHeight / 50) && window.pageYOffset > 0) {
      let element = document.getElementById('navbar');
      element.classList.add('slideOutUp');
      this.mostrarNav = true;

    }
    else {
      let element = document.getElementById('navbar');
      element.classList.remove('sticky');
      element.classList.remove('flash');
      element.classList.add('d-none');
      //  element.classList.add('slideOutDown');
      /*     this.fondoRandom(); */
    }

  }

}
