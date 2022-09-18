import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
//-------------------
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorService } from './providers/validator.service';
import { BarchartComponent } from './chart/barchart/barchart.component';
import { NgChartsModule } from 'ng2-charts';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    SigninComponent,
    ForgotpasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule, 
    // FormsModule,
    ReactiveFormsModule,  
  // -----------------------------
    UserModule,
    NgChartsModule
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
