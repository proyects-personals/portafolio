import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  isDarkMode: boolean  = false;
  sunMoonIcon: string = 'fa-solid fa-moon';
  selectedTheme: string = '';
  languageDropdownOpen: boolean = false;

  constructor(
    public _translate: TranslateService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.addLangs();
    this.defaultLang();
  }

  ngOnInit(): void {
    // Obtener el tema almacenado en localStorage o usar 'light' por defecto
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.changeTheme(savedTheme);
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

   toggleLanguageDropdown() {
    this.languageDropdownOpen = !this.languageDropdownOpen;
  }

  changeLanguage(language: string) {
    this._translate.use(language);
    this.languageDropdownOpen = false; // Cierra el menú desplegable después de seleccionar un idioma
  }

  changeTheme(theme: string) {
    // Cambia el valor de isDarkMode, selectedTheme y aplica el tema
    this.isDarkMode = theme === 'dark';
    this.selectedTheme = theme;
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

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode; // Cambia el modo entre oscuro y claro
    this.changeTheme(this.isDarkMode ? 'dark' : 'light'); // Cambia el tema
    // Cambia el ícono del sol y la luna según el modo
    this.sunMoonIcon = this.isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  }
}
