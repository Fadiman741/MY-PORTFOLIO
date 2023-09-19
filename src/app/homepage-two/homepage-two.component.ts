import { Component, OnInit } from '@angular/core';
import { faSquareGithub,faLinkedin ,faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-homepage-two',
  templateUrl: './homepage-two.component.html',
  styleUrls: ['./homepage-two.component.css']
})
export class HomepageTwoComponent implements OnInit {

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

