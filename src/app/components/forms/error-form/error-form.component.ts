import {Component, Input} from '@angular/core';
import {ErrorMessagesForm} from "../../../interfaces/error-message";
import {LabelsMapping} from "../../../interfaces/labels";
import { FormGroup} from "@angular/forms";

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent {

  @Input() controlName: string = '';
  @Input() formGroup: FormGroup | null = null;
  @Input() translateRequired: string = '';
  @Input() translateMaxlength: string = '';
  @Input() translateMinlength: string = '';
  @Input() translatePattern: string = '';

  get errorMessage(): string | null {
    const control = this.formGroup?.get(this.controlName);

    if (!control?.touched) {
      return null;
    }


    const errors = control.errors;

    const errorMessages: ErrorMessagesForm = {
      minlength: this.valueNameTranslateMinlength(),
      maxlength: this.valueNameTranslateMaxlength(),
      pattern: this.valueNameTranslatePattern(),
      required: this.valueNameTranslateRequired(),
    };

    const errorKeys = Object.keys(errors ?? {});


    const errorMessage = errorKeys
        .map((key) => errorMessages[key])
        .find((message) => message !== undefined);

    return errorMessage ?? null;
  }

  valueNameTranslateRequired(): string{

    if(this.translateRequired != '')
    {
      return this.translateRequired
    }
    return ""
  }

  valueNameTranslateMaxlength(): string {

    if(this.translateMaxlength != '')
    {
      return this.translateMaxlength
    }
    return ""
  }

  valueNameTranslateMinlength(): string{

    if(this.translateMinlength != '')
    {
      return this.translateMinlength
    }
    return ""
  }


  valueNameTranslatePattern(): string{

    if(this.translatePattern != '')
    {
      return this.translatePattern
    }
    return ""
  }

  private getLabel(): string {
    const labelsMapping: LabelsMapping = {
      'from_name': '',
      'subject': '',
      'from_email': '',
      'message': '',
    };

    return labelsMapping[this.controlName] || this.controlName;
  }

}
