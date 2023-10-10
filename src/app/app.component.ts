import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public _translate: TranslateService){
    this._translate.addLangs(['es','en']);
    this._translate.setDefaultLang('es');
  }
  title = 'portafolio';
}
