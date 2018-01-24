import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'app';

  loadComponent;

  loadComponenteHijo() {
    this.loadComponent = true;
  }
}
