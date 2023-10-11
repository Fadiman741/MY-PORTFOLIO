import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-porjects-samples',
  templateUrl: './porjects-samples.component.html',
  styleUrls: ['./porjects-samples.component.css']
})
export class PorjectsSamplesComponent implements OnInit {

  Projects = [
    {
      id: 1,
      src: 'assets/projects/5.jpg',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: 'assets/projects/5.jpg',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: 'assets/projects/5.jpg',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: 'assets/projects/5.jpg',
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: 5,
      src: 'assets/projects/5.jpg',
      alt: 'Side 5',
      title: 'Side 5',
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<span>&#8249</span>', '<span>&#8250</span>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
