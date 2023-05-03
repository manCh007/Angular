import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { Registration } from '../Registration';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  implements OnInit {

  feedbackuser: any;
  responseForHtml: any;
  responseMessage: any;
  registration: Registration=new Registration(new User("", "", ""), "");

 constructor(private feedbackService: FeedbackService){}

 ngOnInit(): void {
}

  public sendFeedback() {
    console.log(this.registration);
    let response = this.feedbackService.postFeedback(this.registration);
    response.subscribe((data) => {
      this.responseMessage = data;
      this.feedbackuser = JSON.parse(this.responseMessage);
      console.log("JSON object -", this.feedbackuser);
      this.responseForHtml = "Thank you "+this.feedbackuser.fname+" for providing your valuable feedback !!";
    });
  }

}
