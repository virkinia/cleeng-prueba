import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class ApiCleengService {


  // private url = 'https://sandbox.cleeng.com/js-api/3.0/api.js';
  private url = 'https://sandbox.cleeng.com/js-api/3.0/checkout.js.php';

  constructor(private http: HttpClient) { }

  public checkout() {

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const body = {
        'displayType': 'inline',
        'containerId': 'my-container',
        'publisherId': 321123321,
        'locale': 'es_ES',
        'completed': function(result){}
      };

     return this.http.get (this.url).subscribe( res => console.log(res));


  }

}
