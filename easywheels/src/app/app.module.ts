import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './user/home-components/homepage/homepage.component';
import {HeaderComponent} from './user/shared/header/header.component';
import { JouneyformComponent } from './user/home-components/jouneyform/jouneyform.component';
import { LoginComponent } from './user/authentication/login/login.component';
import { ScreencoverComponent } from './user/shared/screencover/screencover.component'
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    JouneyformComponent,
    LoginComponent,
    ScreencoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
