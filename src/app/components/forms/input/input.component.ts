import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() formGroups!: FormGroup;
  @Input() formName: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() valid: any;
  @Input() touched: any;
  @Input() isOptional: boolean = false;
  @Input() for: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() translate: string = '';
  @Input() message:boolean = false;

  valueNameTranslatePlaceholder(){

    if(this.placeholder != '')
    {
      return this.placeholder
    }
    return ""
  }
}
