import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjouterTicketRoutingModule } from './ajouter-ticket-routing.module';
import { AjouterTicketComponent } from './ajouter-ticket/ajouter-ticket.component';


@NgModule({
  declarations: [
    AjouterTicketComponent
  ],
  imports: [
    CommonModule,
    AjouterTicketRoutingModule,
    HttpClientModule ,
    FormsModule
  ]
})
export class AjouterTicketModule { }
