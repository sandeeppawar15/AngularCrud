import { NgModule } from '@angular/core';
import { UserdashboardComponent } from './userdashboard.component';
import { AdduserComponent } from './adduser.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EdituserComponent } from './edituser.component';






@NgModule({
  declarations: [
    UserdashboardComponent,
    AdduserComponent,
    EdituserComponent
  ],
  imports: [
    FormsModule ,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule 
  ]
})
export class UserModule { }
