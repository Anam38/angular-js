import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Testing1componenComponent } from './testing1componen/testing1componen.component';
import { TestingcomponenComponent } from './testingcomponen/testingcomponen.component';
import { DatasiswaComponent } from './datasiswa/datasiswa.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DatasiswaComponent,
    Testing1componenComponent,
    TestingcomponenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
