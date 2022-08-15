import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './user/userdashboard.component';
import { AdduserComponent } from './user/adduser.component';
import { EdituserComponent } from './user/edituser.component';
import { BarchartComponent } from './chart/barchart/barchart.component';

const routes: Routes = [
  { path: "", component: UserdashboardComponent },
  { path: "adduser", component: AdduserComponent },
  { path: "userdashboard", component: UserdashboardComponent },
  { path: "edituser/:id", component: EdituserComponent },
  { path: "chart/barchart", component: BarchartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
