import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  seleccionar(opcion) {

    let todos = document.getElementsByClassName('ts-service-box');

    for (let index = 0; index < todos.length; index++) {
      const element = todos[index];
      element.classList.remove('active');
    }

    let element = document.getElementById(opcion);
    element.classList.add('active');


    let foto = document.getElementById('service-center-img');
    /* foto.setAttribute('src', "../../../assets/laforja/" + opcion + ".png") */


  }

}
