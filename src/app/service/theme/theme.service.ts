import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {}

  setTheme(theme: string) {
    // Aquí simplemente puedes emitir un BehaviorSubject o un Observable
    // para que los componentes que estén suscritos a este servicio puedan recibir el nuevo tema.
    // Puedes usar BehaviorSubject para almacenar el tema actual.
    // En este ejemplo, estoy usando BehaviorSubject.
    this.themeSubject.next(theme);
  }

  getCurrentTheme(): string {
    return this.themeSubject.value;
  }
  
  // Esto sería necesario si quieres que otros componentes sepan qué tema está actualmente activo.
  private themeSubject = new BehaviorSubject<string>('light');
  theme$ = this.themeSubject.asObservable();
}

