import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  setTheme(theme: string) {
    this.themeSubject.next(theme);
  }

  getCurrentTheme(): string {
    return this.themeSubject.value;
  }
  
  private themeSubject = new BehaviorSubject<string>('dark');
  theme$ = this.themeSubject.asObservable();
}

