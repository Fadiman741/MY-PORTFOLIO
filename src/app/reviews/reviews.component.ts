import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews :any= [    
    { "id": 1, "title": "Some quick example text to build on", "body": "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.","author":"MAFADI LEPHAKA","company":"Mokone Art Studios","ratings":"4.5" },   
    // { "id": 2, "title": "Some quick example text to build on", "body": "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.","author":"MAFADI LEPHAKA","company":"Mokone Art Studios","ratings":"4.5"  },    
    // { "id": 3, "title": "Some quick example text to build on", "body": "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.","author":"MAFADI LEPHAKA","company":"Mokone Art Studios","ratings":"4.5"  },    
    // { "id": 4, "title": "Some quick example text to build on", "body": "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.","author":"MAFADI LEPHAKA","company":"Mokone Art Studios","ratings":"4.5"  },    
    // { "id": 5, "title": "Some quick example text to build on", "body": "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.","author":"MAFADI LEPHAKA","company":"Mokone Art Studios","ratings":"4.5"  },    
    // { "id": 6, "title": "Some quick example text to build on", "body": "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title.","author":"MAFADI LEPHAKA","company":"Mokone Art Studios","ratings":"4.5"  }, 
  ]

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

}
