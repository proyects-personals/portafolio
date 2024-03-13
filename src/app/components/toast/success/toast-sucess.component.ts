import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast-sucess',
  templateUrl: './toast-sucess.component.html',
  styleUrls: ['./toast-sucess.component.css']
})
export class ToastSucessComponent {
  snackBarRef = inject(MatSnackBarRef);

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
}
