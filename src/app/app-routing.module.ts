import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageTwoComponent} from './homepage-two/homepage-two.component';
import { ContactmeComponent } from './contactme/contactme.component';

const routes: Routes = [
  { 
    path:  '',  component:  HomepageTwoComponent,
    // path: 'hire-me' , component: ContactmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
