import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registration } from './Registration';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  public postFeedback(registration: Registration) {
    return this.http.post("http://localhost:5000/demo/api/v1.0/user/feedback", registration, {responseType: 'text' as 'json'});
  }
}
