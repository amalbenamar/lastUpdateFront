import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterTicketComponent } from './ajouter-ticket/ajouter-ticket.component';

const routes: Routes = [
  {path:'',component:AjouterTicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterTicketRoutingModule { }
