import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(public _translate: TranslateService){
    this._translate.addLangs(['es','en']);
    this._translate.setDefaultLang('es');
  }

  cambiarIdioma(idioma: string) {
    this._translate.use(idioma); // Cambiar el idioma
  }
}
