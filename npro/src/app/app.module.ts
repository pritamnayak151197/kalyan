import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

import {CardModule} from 'primeng/card';

import { LoginComponent } from './login/login.component';
import {SignupComponent } from './signup/signup.component'

import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
