import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import { ContactmeComponent } from './contactme/contactme.component';

const routes: Routes = [
  { 
    path:  '',  component:  HomePageComponent,
    // path: 'hire-me' , component: ContactmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
