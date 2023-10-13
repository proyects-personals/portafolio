import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  isDarkEnable = false;
presentTheme$ = new BehaviorSubject<string>('light');
constructor() {}
ngOnInit() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    this.presentTheme$.next(savedTheme);
  }
}
changeTheme() {
  this.presentTheme$.value === 'light'
    ? this.presentTheme$.next('dark')
    : this.presentTheme$.next('light');
  localStorage.setItem('theme', this.presentTheme$.value);
  this.isDarkEnable = !this.isDarkEnable;
}
}
