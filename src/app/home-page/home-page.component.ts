import { Component, OnInit } from '@angular/core';
import { faSquareGithub,faLinkedin ,faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { ViewportScroller } from "@angular/common";


// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  faSquareGithub=faSquareGithub;
  faLinkedin=faLinkedin;
  faSquareWhatsapp=faSquareWhatsapp;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }
  goProjects() {
    this.scroller.scrollToAnchor("projects");
  }
}
