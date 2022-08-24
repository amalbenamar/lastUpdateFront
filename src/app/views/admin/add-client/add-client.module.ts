import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddClientRoutingModule } from './add-client-routing.module';
import { AddClientComponent } from './add-client/add-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddClientComponent
  ],
  imports: [
    CommonModule,
    AddClientRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddClientModule { }
