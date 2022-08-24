import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { TechnicienLayoutComponent } from './technicien-layout/technicien-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    TechnicienLayoutComponent,
    ClientLayoutComponent,
    LoginLayoutComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutsModule { }
