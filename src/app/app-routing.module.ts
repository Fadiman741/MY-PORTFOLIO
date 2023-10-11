import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageTwoComponent} from './homepage-two/homepage-two.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HireMeComponent} from './hire-me/hire-me.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {WriteReviewComponent} from './write-review/write-review.component';

const routes: Routes = [
  { path:  '' ,  component:  HomepageTwoComponent},
  { path: 'Hire-Me', component: HireMeComponent},
  { path: 'reviews', component:ReviewsComponent},
  { path: 'Type-a-review' , component:WriteReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
