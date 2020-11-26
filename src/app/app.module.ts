import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { BilletModule } from './billet/billet.module';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BilletModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
