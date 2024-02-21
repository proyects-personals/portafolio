import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/service/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isDarkMode: boolean = false;
  sunMoonIcon: string = 'fa-solid fa-moon';
  languageDropdownOpen: boolean = false;
  themes = '';

  constructor(
    public _translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.loadSavedTheme();
    this.loadSavedLanguage();
  }

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme != null) {
      this.themeService.setTheme(savedTheme);
      this.setTheme(savedTheme);
    }
  }

  loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage != null) {
      this.changeLanguage(savedLanguage);
    }
  }

  toggleTheme() {
    const currentTheme = this.themeService.getCurrentTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(newTheme);
    this.setTheme(newTheme);
  }

  private setTheme(theme: string) {
    this.themes = theme;
    this.sunMoonIcon = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    this.el.nativeElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    theme === 'dark' ? this.renderer.addClass(this.document.body, 'dark-theme') : this.renderer.removeClass(this.document.body, 'dark-theme');
  }

  cambiarIdioma(idioma: string) {
    this._translate.use(idioma);
    localStorage.setItem('language', idioma);
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
    localStorage.setItem('language', language);
    this.languageDropdownOpen = false;
  }  
}
