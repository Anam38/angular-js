import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TestingcomponenComponent } from './testingcomponen/testingcomponen.component';
import { Testing1componenComponent } from './testing1componen/testing1componen.component';
import { DatasiswaComponent } from './datasiswa/datasiswa.component'
// buat routes
const routes: Routes = [
{ path:'datasiswa',component:DatasiswaComponent},
{ path:'testing',component:TestingcomponenComponent},
{ path:'testing1',component:Testing1componenComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {
 }
