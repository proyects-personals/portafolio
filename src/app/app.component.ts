import { Component } from '@angular/core';
import { NotificationHttpService } from './service/notification/notification-http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio de steveen ordoñez';

  constructor(
    private notificacionesHttpService: NotificationHttpService,
  ) {}

  showSuccess() {
    this.notificacionesHttpService.showSuccess('Operación exitosa');
  }
}
