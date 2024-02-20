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
  ) {
  }

  ngOnInit(): void {
    // Verificar si hay un tema guardado en localStorage al inicio
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);
    if(savedTheme != null) {
      this.themeService.setTheme(savedTheme);
    }
    
    // Suscribirse al Observable del tema para recibir actualizaciones
    this.themeService.theme$.subscribe(theme => {
      this.setTheme(theme);
    });
  }

  toggleTheme() {
    // Obtener el tema actual del servicio ThemeService
    const currentTheme = this.themeService.getCurrentTheme();

    // Determinar el tema opuesto
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Establecer el tema en el servicio y actualizar el icono
    this.themeService.setTheme(newTheme);
    this.setTheme(newTheme);
}

private setTheme(theme: string) {
    this.themes = theme; // Actualizar la variable de clase 'themes'

    // Actualizar el icono
    this.sunMoonIcon = theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';

    // Aplicar el tema al cuerpo del documento
    this.el.nativeElement.dataset.theme = theme;

    // Guardar el tema seleccionado en localStorage
    localStorage.setItem('theme', theme);

    // Aplicar estilos adicionales según el tema
    if (theme === 'dark') {
      this.renderer.addClass(this.document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(this.document.body, 'dark-theme');
    }
}
}
