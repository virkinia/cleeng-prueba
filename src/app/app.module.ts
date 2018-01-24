import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InternoComponent } from './componentes/interno/interno.component';


@NgModule({
  declarations: [
    AppComponent,
    InternoComponent
  ],
  imports: [
    BrowserModule,

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
