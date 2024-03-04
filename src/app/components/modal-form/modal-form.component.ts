import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailMessage } from 'src/app/interfaces/emial';
import { EmailHttpService } from 'src/app/service/email/email-http.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent  implements OnInit {

  formGroup!: FormGroup;
  currentEmail = {} as EmailMessage;
  isModalOpen = true;
  @Output() close = new EventEmitter<boolean>();
  isSending = false;
  
  ngOnInit(): void {
   
  }


  constructor(
    private fb:FormBuilder,
    private _emailHttpService:EmailHttpService,
  ) {
    this.initForm();
  }


  initForm() {
    this.formGroup = this.fb.group({
      from_name:[
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20)
          ]
        }
      ],
      to_name:'Admin',
      from_email:['', 
      [
        Validators.required,
        Validators.email,
        Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"),
        Validators.minLength(12),
        Validators.maxLength(20)
      ]
    ],
      subject:[
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(25)
          ]
        }
      ],
      message:[
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(125)
          ]
        }
      ],
    })
    this.formGroup.valueChanges.subscribe((val) => {
      this.currentEmail = val;
    });
  }

  public createEmail() {
    this._emailHttpService.sendEmail(this.currentEmail).subscribe((response:any) => {
      alert('correo enviado')
    })
  }

  public send(): void {
    if (this.formGroup.valid) {
      this.createEmail();
      }
    }

  closeModal() {
    this.close.emit();
  }
  
}
