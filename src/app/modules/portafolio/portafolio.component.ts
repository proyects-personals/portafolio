import { Component, ElementRef, OnInit} from '@angular/core';
import { ThemeService } from 'src/app/service/theme/theme.service';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  isModalOpen: boolean = false;

  constructor(
    private el: ElementRef,
    private themeService: ThemeService,
    private _translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadSavedLanguage();
    this.themeService.theme$.subscribe(theme => {
      this.changeTheme(theme);
    });
  }

  private changeTheme(theme: string) {
    this.el.nativeElement.dataset.theme = theme;
  }

  openModal() {
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }

  private loadSavedLanguage(): void {
    const savedLanguage = localStorage.getItem('language') || 'es'; // 'es' como idioma por defecto
    this._translate.use(savedLanguage);
  }

}
