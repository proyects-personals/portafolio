import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Observable, from } from 'rxjs';
import { EmailMessage } from 'src/app/interfaces/emial';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class EmailHttpService {

  private USER_ID = environment.USER_ID;
  private SERVICE_ID = environment.SERVICE_ID;
  private TEMPLATE_ID = environment.TEMPLATE_ID;


  constructor() { 
    emailjs.init(this.USER_ID);
  }

  sendEmail(message: EmailMessage): Observable<EmailJSResponseStatus> {
    const messageObject: Record<string, unknown> = {
      from_name: message.from_name,
      to_name: message.to_name,
      from_email: message.from_email,
      subject: message.subject,
      message: message.message
    };
    return from(emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, messageObject));
  }
}
