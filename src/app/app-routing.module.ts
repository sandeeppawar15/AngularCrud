import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './user/userdashboard.component';
import { AdduserComponent } from './user/adduser.component';
import { EdituserComponent } from './user/edituser.component';
import { BarchartComponent } from './chart/barchart/barchart.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  { path: "", component: UserdashboardComponent },
  { path: "adduser", component: AdduserComponent },
  { path: "userdashboard", component: UserdashboardComponent },
  { path: "edituser/:id", component: EdituserComponent },
  { path: "signin", component: SigninComponent },
  { path: "forgot-password", component: ForgotpasswordComponent },
  { path: "chart/barchart", component: BarchartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
