import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent {

  @Input() userInfo: any;
  @Output() close = new EventEmitter<boolean>();

  mostrarPrimaria = true;
  mostrarSecundaria = false;

  mostrarImagenSecundaria() {
    this.mostrarPrimaria = false;
    this.mostrarSecundaria = true;
  }

  ocultarImagenSecundaria() {
    this.mostrarPrimaria = true;
    this.mostrarSecundaria = false;
  }

  closeModal() {
    this.close.emit();
  }
}
