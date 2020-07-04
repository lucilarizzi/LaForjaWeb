import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-aluminio',
  templateUrl: './aluminio.component.html',
  styleUrls: ['./aluminio.component.css']
})
export class AluminioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(opcion) {
    switch (opcion) {
      case 1:
        this.router.navigate(['/aluminio/hobby']);
        break;
      case 2:
        this.router.navigate(['/aluminio/escalonadomini']);
        break;
      case 3:
        this.router.navigate(['/aluminio/semiherms']);
        break;
    }


  }

}
