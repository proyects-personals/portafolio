import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {
  isDarkMode: boolean = false;
  selectedTheme: string = 'light'; // Opción predeterminada del select

  constructor(
    public _translate: TranslateService,
    private el: ElementRef,
    private renderer:Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.addLangs();
    this.defaultLang();
  }

  ngOnInit(): void {
    // Agregar un retraso de 1 segundo (1000 milisegundos)
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.setTheme(savedTheme);
    }
    setTimeout(() => {
      // Código a ejecutar después de 1 segundo
    }, 1000);
  }

  cambiarIdioma(idioma: string) {
    this._translate.use(idioma); // Cambiar el idioma
  }

  addLangs() {
    this._translate.addLangs(["es", "en"]);
  }

  defaultLang() {
    this._translate.setDefaultLang('es');
  }

  changeTheme(theme: string) {
    // Cambia el valor de isDarkMode y selectedTheme
    this.isDarkMode = theme === 'dark';
    this.selectedTheme = theme;
    // Llama a setTheme para aplicar el tema correspondiente
    this.setTheme(theme);
  }

  private setTheme(theme: string) {
    // Cambiar el tema según el valor del atributo data-theme
    this.el.nativeElement.dataset.theme = theme;
    // Guardar el tema seleccionado en localStorage
    localStorage.setItem('theme', theme);

    // Opcional: Cambiar el tema global de la aplicación (usando Renderer2)
    if (theme === 'dark') {
      this.renderer.addClass(this.document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
    }
  }
}
