import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { Location } from '@angular/common';
import { finalize} from 'rxjs/operators';
import { NotificationHttpService } from 'src/app/service/notification/notification-http.service';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

  constructor(
    private notificacionesHttpService:NotificationHttpService,
    private location: Location
  ) {}

  redirectUrl = '/error';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.notificacionesHttpService.showLoading();

    return next.handle(req).pipe(
      tap(
        (event: any) => {
          if (event.body && event.body.message) {
            if (event.status === 200 ) {
              this.notificacionesHttpService.showSuccess(event.body.message);
            }
          }
        },
        (error) => {
         
        }
      ),
      finalize(() => {
        this.notificacionesHttpService.hideLoading();
      })
    );
  }
}