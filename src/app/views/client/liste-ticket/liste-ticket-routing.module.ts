import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeTicketComponent } from './liste-ticket/liste-ticket.component';

const routes: Routes = [
  {path:'',component:ListeTicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeTicketRoutingModule { }
