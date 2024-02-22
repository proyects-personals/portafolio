import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { FooterComponent } from './footer/footer.component';
import { ModalProfileComponent } from './modal-profile/modal-profile.component';
import { ModalFormComponent } from './modal-form/modal-form.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalProfileComponent,
    ModalFormComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ModalProfileComponent,
  ]
})
export class ComponentsModule { }
