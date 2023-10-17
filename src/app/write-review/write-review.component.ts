import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../apiservices/api.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css']
})
export class WriteReviewComponent implements OnInit {

  constructor( private apiService:ApiService) { }

  ngOnInit() {
  }
  onReviewSubmit(form: NgForm) {
    if (form.valid) {
      const review = {
        name: form.value.name,
        email: form.value.email,
        URL: form.value.URL,
        rating: form.value.rating,
        message: form.value.message,
      };
      this.apiService.create_review(review).subscribe(
        (response) => {
          console.log('Review posted successful:', response);

          form.resetForm();
        },
        (error) => {
          console.error('Review failed:', error);
          // Handle error, e.g., display an error message to the user
        }
      );
    }
  }
}
