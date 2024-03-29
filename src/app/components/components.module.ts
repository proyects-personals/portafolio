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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './forms/input/input.component';
import { ErrorFormComponent } from './forms/error-form/error-form.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ToastSucessComponent } from './toast/success/toast-sucess.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ModalProfileComponent,
    ModalFormComponent,
    InputComponent,
    ErrorFormComponent,
    ToastSucessComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    // MatSnackBarModule,
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
    ModalFormComponent,
    InputComponent,
    // ToastSucessComponent,
  ]
})
export class ComponentsModule { }
