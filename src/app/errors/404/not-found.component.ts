import {Component, ElementRef, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ThemeService} from "../../service/theme/theme.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
      private el: ElementRef,
      private themeService: ThemeService,
      private location: Location,
      private _translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.loadSavedLanguage();
    this.theme();
  }

  private  theme():void {
    const savedTheme = localStorage.getItem('theme' || "dark");
    this.changeTheme(savedTheme);
  }
  private changeTheme(theme: string|null) {
    this.el.nativeElement.dataset.theme = theme;
  }

  getBack(){
    this.location.back();
  }

  private loadSavedLanguage(): void {
    const savedLanguage = localStorage.getItem('language') || 'es';
    this._translate.use(savedLanguage);
  }
}
