import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterTicketRoutingModule } from './ajouter-ticket-routing.module';
import { AjouterTicketComponent } from './ajouter-ticket/ajouter-ticket.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AjouterTicketComponent
  ],
  imports: [
    CommonModule,
    AjouterTicketRoutingModule,
    FormsModule
  ]
})
export class AjouterTicketModule { }
