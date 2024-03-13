import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import { ToastSucessComponent } from 'src/app/components/toast/success/toast-sucess.component';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationHttpService {

  private loading = new Subject<boolean>();
  loadingStatus = this.loading.asObservable();
  private success = new Subject<string>();
  successStatus = this.success.asObservable();
  private error = new Subject<string>();
  errorStatus = this.error.asObservable();
  private alert = new Subject<string>();
  alertStatus = this.alert.asObservable();
  private email = new Subject<string>();
  emailStatus = this.email.asObservable();

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showLoading() {
    this.loading.next(true);
  }

  hideLoading() {
    this.loading.next(false);
    this.loading.complete();
  }

  showSuccess(message: string): void {
    this.snackBar.openFromComponent(ToastSucessComponent, {
      data: message,
      horizontalPosition: "right",
      verticalPosition: 'bottom',
      duration: 5000 
    });
  }

}
