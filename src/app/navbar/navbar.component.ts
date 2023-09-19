import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { faSquareGithub,faLinkedin ,faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
