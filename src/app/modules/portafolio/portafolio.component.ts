import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import emailjs from '@emailjs/browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  // isDarkMode: boolean  = false;
  // sunMoonIcon: string = 'fa-solid fa-moon';
  // selectedTheme: string = '';
  // languageDropdownOpen: boolean = false;
  // isMenuOpen = false;
  // showMenuDown = true;
  // isMenuOpenEmail = false;
  // showMenuDownEmail = true;
  // mostrarPrimaria = false;
  // mostrarSecundaria = false;
  // formGroup!: FormGroup;

  constructor(
    public _translate: TranslateService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private fb:FormBuilder
  ) {
    // this.addLangs();
    // this.defaultLang();
    // this.initForm();
  }

  // initForm() {
  //   this.formGroup = this.fb.group({
  //     from_name:[
  //       '',
  //       {
  //         validators: [
  //           Validators.required,
  //           Validators.minLength(2)
  //         ]
  //       }
  //     ],
  //     to_name:'Admin',
  //     from_email:['', [Validators.required, Validators.email]],
  //     subject:[
  //       '',
  //       {
  //         validators: [
  //           Validators.required,
  //           Validators.minLength(2)
  //         ]
  //       }
  //     ],
  //     message:[
  //       '',
  //       {
  //         validators: [
  //           Validators.required,
  //           Validators.minLength(2)
  //         ]
  //       }
  //     ],
  //   })
  // }

  // async send() {
  //   emailjs.init('qIVLgZYRhPQybiqfI')
  //   let response = await emailjs.send('service_rtyq5ds','template_b6reeee',{
  //     from_name:this.formGroup.value.from_name,
  //     to_name:this.formGroup.value.to_name,
  //     from_email:this.formGroup.value.from_email,
  //     subject:this.formGroup.value.subject,
  //     message:this.formGroup.value.message,
  //   });
  //   alert('Message has been sent');
  //   this.formGroup.reset();
  // }

  ngOnInit(): void {
    // const savedTheme = localStorage.getItem('theme') || 'dark';
    //this.changeTheme(savedTheme);
  }

  // titles = [
  //   "'Skill' | translate }}"
  // ];

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }


  // abrirModal(): void {
  //   this.isMenuOpen = true;
  // }

  // cerrarModal(): void {
  //   this.isMenuOpen = false;
  // }

  // mostrarImagenSecundaria(): void {
  //   this.mostrarPrimaria = false;
  //   this.mostrarSecundaria = true;
  // }
  
  // ocultarImagenSecundaria(): void {
  //   this.mostrarPrimaria = true;
  //   this.mostrarSecundaria = false;
  // }
  
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   const windowHeight = window.innerHeight;
  //   const buttonBottom = document.getElementById('toggleButton')?.getBoundingClientRect().bottom || 0;
  //   this.showMenuDown = buttonBottom < windowHeight / 2;

  // }

  // toggleMenuEmail() {
  //   this.isMenuOpenEmail = !this.isMenuOpenEmail;
  // }

  // cerrarModalEmail(): void {
  //   this.isMenuOpenEmail = false;
  // }

  // @HostListener('window:resize', ['$event'])
  // onResizeEmail(event: any) {
  //   const windowHeight = window.innerHeight;
  //   const buttonBottom = document.getElementById('toggleButtonEmail')?.getBoundingClientRect().bottom || 0;
  //   this.showMenuDown = buttonBottom < windowHeight / 2;

  // }


  // cambiarIdioma(idioma: string) {
  //   this._translate.use(idioma); // Cambiar el idioma
  // }

  // addLangs() {
  //   this._translate.addLangs(["es", "en"]);
  // }

  // defaultLang() {
  //   this._translate.setDefaultLang('es');
  // }

  //  toggleLanguageDropdown() {
  //   this.languageDropdownOpen = !this.languageDropdownOpen;
  // }

  // changeLanguage(language: string) {
  //   this._translate.use(language);
  //   this.languageDropdownOpen = false; // Cierra el menú desplegable después de seleccionar un idioma
  // }

  // changeTheme(theme: string) {
  //   // Cambia el valor de isDarkMode, selectedTheme y aplica el tema
  //   this.isDarkMode = theme === 'dark';
  //   this.selectedTheme = theme;
  //   this.setTheme(theme);
  // }

  // private setTheme(theme: string) {
  //   // Cambiar el tema según el valor del atributo data-theme
  //   this.el.nativeElement.dataset.theme = theme;
  //   // Guardar el tema seleccionado en localStorage
  //   localStorage.setItem('theme', theme);

  //   // Opcional: Cambiar el tema global de la aplicación (usando Renderer2)
  //   if (theme === 'dark') {
  //     this.renderer.addClass(this.document.body, 'dark-theme');
  //   } else {
  //     this.renderer.removeClass(this.document.body, 'dark-theme');
  //   }
  // }

  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode; // Cambia el modo entre oscuro y claro
  //   this.changeTheme(this.isDarkMode ? 'dark' : 'light'); // Cambia el tema
  //   // Cambia el ícono del sol y la luna según el modo
  //   this.sunMoonIcon = this.isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  // }
}
