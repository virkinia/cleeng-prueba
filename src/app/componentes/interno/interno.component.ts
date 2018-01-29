import { Component, OnInit } from '@angular/core';
import { ApiCleengService } from '../../servicios/api-cleeng.service';
import { Observable } from 'rxjs/Observable';


interface LoginOptions {
    displayType: string;
    containerId?: string;
    publisherId?: number;
    locale?: string;
    completed: any;
}


@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html'
})


export class InternoComponent implements OnInit {


  constructor(private servicioCleeng: ApiCleengService) {

  }

  ngOnInit() {
  }

 public checkoutCleeng(datos) {

      this.servicioCleeng.checkout();
    }
}
