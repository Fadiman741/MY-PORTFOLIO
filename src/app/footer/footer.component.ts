import { Component, OnInit } from '@angular/core';
import { faSquareGithub,faLinkedin ,faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faSquareGithub=faSquareGithub;
  faLinkedin=faLinkedin;
  faSquareWhatsapp=faSquareWhatsapp;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit() {
  }
  goHome() {
    this.scroller.scrollToAnchor("home");
  }
  goDown1() {
    this.scroller.scrollToAnchor("about");
  }

  goDown2() {
    this.scroller.scrollToAnchor("skills");
  
  }

  goDown3() {
    this.scroller.scrollToAnchor("projects");
  }
}
