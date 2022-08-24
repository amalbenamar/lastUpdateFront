import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTicketRoutingModule } from './edit-ticket-routing.module';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditTicketComponent
  ],
  imports: [
    CommonModule,
    EditTicketRoutingModule,
    FormsModule
  ]
})
export class EditTicketModule { }
