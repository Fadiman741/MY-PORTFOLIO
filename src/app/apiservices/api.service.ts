import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrls = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  create_review(review: any): Observable<any> {
    return this.http.post(this.baseUrls + '/create_review/', review);
  }
}
