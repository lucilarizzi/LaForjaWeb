import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inoxidables',
  templateUrl: './inoxidables.component.html',
  styleUrls: ['./inoxidables.component.css']
})
export class InoxidablesComponent implements OnInit {

  ver = 0;

  constructor() { }

  ngOnInit() {
  }

  cambiar(opcion) {

    if (this.ver != 0) {
      this.ver = 0;
    }
    else {
      this.ver = opcion;

    }
  }


}
