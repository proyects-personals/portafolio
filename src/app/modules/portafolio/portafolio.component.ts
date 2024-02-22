import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import emailjs from '@emailjs/browser'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/service/theme/theme.service';
import { ModalProfileComponent } from 'src/app/components/modal-profile/modal-profile.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {


  isMenuOpen = false;
  showMenuDown = true;
  isMenuOpenEmail = false;
  isModalOpen = false;

  // showMenuDownEmail = true;
  // mostrarPrimaria = false;
  // mostrarSecundaria = false;
  // formGroup!: FormGroup;

  constructor(
    public _translate: TranslateService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private fb:FormBuilder,
    private themeService: ThemeService,
    private _router: Router,
  ) {
    // this.initForm();
  }


    // //informations
    // openDialogInformationBranch(): void {
    //   const dialogRef = this.openInformationsBranchDialog();
  
    //   dialogRef.afterClosed().subscribe(() => {
        
    //       this.navigateToBranchList()
        
    //   });
    // }
  
    // private navigateToBranchList(): void {
    //   this._router.navigate(['/system/sucursales']);
    // }
  
    // public openInformationsBranchDialog(): MatDialogRef<ModalProfileComponent> {
    //   return this._dialog.open(ModalProfileComponent, {
    //     height: '20px',
    //     width: '50px',
    //   });
    // }
  

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

  // titles = [
  //   "'Skill' | translate }}"
  // ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  abrirModal(): void {
    this.isMenuOpen = true;
  }

  cerrarModal(): void {
    this.isMenuOpen = false;
  }

  // mostrarImagenSecundaria(): void {
  //   this.mostrarPrimaria = false;
  //   this.mostrarSecundaria = true;
  // }
  
  // ocultarImagenSecundaria(): void {
  //   this.mostrarPrimaria = true;
  //   this.mostrarSecundaria = false;
  // }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const windowHeight = window.innerHeight;
    const buttonBottom = document.getElementById('toggleButton')?.getBoundingClientRect().bottom || 0;
    this.showMenuDown = buttonBottom < windowHeight / 2;

  }

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


 
}
