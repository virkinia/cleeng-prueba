import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InternoComponent } from './componentes/interno/interno.component';
import { ApiCleengService } from './servicios/api-cleeng.service';

import { Script } from './servicios/script.service';


@NgModule({
  declarations: [
    AppComponent,
    InternoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

],
  providers: [
    ApiCleengService,
    Script

],
  bootstrap: [AppComponent]
})
export class AppModule { }
