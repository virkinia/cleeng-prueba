import { Component, OnInit } from '@angular/core';
import { ApiCleengService } from '../../servicios/api-cleeng.service';
import { Observable } from 'rxjs/Observable';
import { Script } from '../../servicios/script.service';

declare var CleengApi: any;

@Component({
  selector: 'app-interno',
  templateUrl: './interno.component.html'
})


export class InternoComponent implements OnInit {

  url = 'https://sandbox.cleeng.com/js-api/3.0/api.js';

  loadAPI: Promise<any>;


  constructor(private servicioCleeng: ApiCleengService, private script: Script) {
    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });
  }


  ngOnInit() {}

  public loadScript() {
      console.log('preparing to load...');
      let node = document.createElement('script');
      node.type = 'text/javascript';
      node.src = this.url;
      document.getElementsByTagName('head')[0].appendChild(node);
  }


  public quefuncione() {
    CleengApi.authentication({
      displayType: 'inline',
      containerId: 'my-container',
      publisherId: 429296420,
      locale: 'es_ES',
      completed : function(result){}
  });
  }
}
