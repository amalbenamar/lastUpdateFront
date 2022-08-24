import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeTicketRoutingModule } from './liste-ticket-routing.module';
import { ListeTicketComponent } from './liste-ticket/liste-ticket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeTicketComponent
  ],
  imports: [
    CommonModule,
    ListeTicketRoutingModule,
    FormsModule
  ]
})
export class ListeTicketModule { }
