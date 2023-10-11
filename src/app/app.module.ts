import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { BackgroundComponent } from './background/background.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomitemsComponent } from './bottomitems/bottomitems.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomepageTwoComponent } from './homepage-two/homepage-two.component';
import { AboutComponent } from './about/about.component';
import { PorjectsSamplesComponent } from './porjects-samples/porjects-samples.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { WriteReviewComponent } from './write-review/write-review.component';

@NgModule({
  declarations: [																	
    AppComponent,
      HomePageComponent,
      FooterComponent,
      ContactmeComponent,
      BackgroundComponent,
      SkillsComponent,
      ProjectsComponent,
      NavbarComponent,
      BottomitemsComponent,
      ServicesComponent,
      ReviewsComponent,
      HomepageTwoComponent,
      AboutComponent,
      PorjectsSamplesComponent,
      HireMeComponent,
      WriteReviewComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
