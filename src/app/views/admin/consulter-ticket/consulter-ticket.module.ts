import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterTicketRoutingModule } from './consulter-ticket-routing.module';
import { ConsulterTicketComponent } from './consulter-ticket/consulter-ticket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsulterTicketComponent
  ],
  imports: [
    CommonModule,
    ConsulterTicketRoutingModule,
    FormsModule
  ]
})
export class ConsulterTicketModule { }
