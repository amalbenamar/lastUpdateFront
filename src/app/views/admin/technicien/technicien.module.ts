import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TechnicienRoutingModule } from './technicien-routing.module';
import { TechnicienComponent } from './technicien/technicien.component';


@NgModule({
  declarations: [
    TechnicienComponent
  ],
  imports: [
    CommonModule,
    TechnicienRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class TechnicienModule { }
