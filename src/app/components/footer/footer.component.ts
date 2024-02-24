import { Component, ElementRef, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/service/theme/theme.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isModalOpen: boolean = false;
  isModalOpenForm: boolean = false;

  constructor(
    private themeService: ThemeService,
    private el: ElementRef,
  ) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe(theme => {
      this.changeTheme(theme);
    });
  }

  private changeTheme(theme: string): void {
    this.el.nativeElement.dataset.theme = theme;
  }

  openModal(): void {
    this.isModalOpen = true;
  }
  
  closeModal(): void {
    this.isModalOpen = false;
  }

  openModalForm(): void{
    this.isModalOpenForm = true;
  }

  closeModalForm(): void{
    this.isModalOpenForm = false
  }
}
