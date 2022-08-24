import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTechnicienRoutingModule } from './edit-technicien-routing.module';
import { EditTechnicienComponent } from './edit-technicien/edit-technicien.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditTechnicienComponent
  ],
  imports: [
    CommonModule,
    EditTechnicienRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EditTechnicienModule { }
