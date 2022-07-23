import { NgModule } from '@angular/core';
import { UserdashboardComponent } from './userdashboard.component';
import { AdduserComponent } from './adduser.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    UserdashboardComponent,
    AdduserComponent
  ],
  imports: [
    FormsModule ,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule 
  ]
})
export class UserModule { }
