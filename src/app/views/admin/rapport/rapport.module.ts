import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportRoutingModule } from './rapport-routing.module';
import { RapportComponent } from './rapport/rapport.component';


@NgModule({
  declarations: [
    RapportComponent
  ],
  imports: [
    CommonModule,
    RapportRoutingModule
  ]
})
export class RapportModule { }
