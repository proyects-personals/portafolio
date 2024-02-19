import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themeSubject = new BehaviorSubject<string>(localStorage.getItem('theme') || 'dark');
  theme$ = this.themeSubject.asObservable();

  constructor() {}

  setTheme(theme: string) {
    localStorage.setItem('theme', theme); 
    this.themeSubject.next(theme);
  }
  
}
