import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component';

const routes: Routes = [
  {path:'',component:EditTicketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTicketRoutingModule { }
