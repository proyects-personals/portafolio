import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { ModulesRoutingModule } from './modules-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PortafolioComponent } from './portafolio/portafolio.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [PortafolioComponent],
  imports: [
    CommonModule,
      BrowserModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
      }),
      ModulesRoutingModule,
      FormsModule,
      ReactiveFormsModule,
  ]
})
export class ModulesModule { }
