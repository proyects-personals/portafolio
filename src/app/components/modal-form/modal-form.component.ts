import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent  implements OnInit {

  formGroup!: FormGroup;
  isModalOpen = true;
  @Output() close = new EventEmitter<boolean>();
  ngOnInit(): void {
   
  }


  constructor(
    private fb:FormBuilder,
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
            Validators.minLength(2)
          ]
        }
      ],
      to_name:'Admin',
      from_email:['', [Validators.required, Validators.email]],
      subject:[
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(2)
          ]
        }
      ],
      message:[
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(2)
          ]
        }
      ],
    })
  }

  async send() {
    emailjs.init('qIVLgZYRhPQybiqfI')
    let response = await emailjs.send('service_rtyq5ds','template_b6reeee',{
      from_name:this.formGroup.value.from_name,
      to_name:this.formGroup.value.to_name,
      from_email:this.formGroup.value.from_email,
      subject:this.formGroup.value.subject,
      message:this.formGroup.value.message,
    });
    alert('Message has been sent');
    this.formGroup.reset();
  }

  closeModal() {
    this.close.emit();
  }
  
}
