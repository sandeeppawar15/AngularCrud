import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdashboardComponent } from './user/userdashboard.component';
import { AdduserComponent } from './user/adduser.component';

const routes: Routes = [
  { path: "", component: UserdashboardComponent },
  { path: "adduser", component: AdduserComponent },
  { path: "userdashboard", component: UserdashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
