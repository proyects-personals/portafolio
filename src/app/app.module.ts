import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './errors/404/not-found.component';
import { PortafolioComponent } from './modules/portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PortafolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
