import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  ngOnInit(): void {
    // Agregar un retraso de 1 segundo (1000 milisegundos)
    setTimeout(() => {
      // Código a ejecutar después de 1 segundo
    }, 1000);
  }
  constructor(public _translate: TranslateService){
    this.addLangs();
    this.defaultLang();
  };

  cambiarIdioma(idioma: string) {
    this._translate.use(idioma); // Cambiar el idioma
  };

  addLangs(){
    this._translate.addLangs(["es","en"]);
  };

  defaultLang(){
    this._translate.setDefaultLang('es');
  }
}
