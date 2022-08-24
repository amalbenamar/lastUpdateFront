import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTechnicienRoutingModule } from './add-technicien-routing.module';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTechnicienComponent
  ],
  imports: [
    CommonModule,
    AddTechnicienRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddTechnicienModule { }
