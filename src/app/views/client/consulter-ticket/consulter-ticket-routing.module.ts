import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterTicketComponent } from './consulter-ticket/consulter-ticket.component';

const routes: Routes = [
  {path:'',component:ConsulterTicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsulterTicketRoutingModule { }
