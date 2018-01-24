import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InternoComponent } from './componentes/interno/interno.component';
import { ApiCleengService } from './servicios/api-cleeng.service';


@NgModule({
  declarations: [
    AppComponent,
    InternoComponent
  ],
  imports: [
    BrowserModule,

],
  providers: [ApiCleengService],
  bootstrap: [AppComponent]
})
export class AppModule { }
