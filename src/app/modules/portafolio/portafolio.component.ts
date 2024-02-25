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

  isModalOpen = false;

  constructor(
    private el: ElementRef,
    private themeService: ThemeService,
  ) {}

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

}
