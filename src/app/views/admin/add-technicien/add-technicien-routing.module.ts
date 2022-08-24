import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';

const routes: Routes = [
  {path:'',component:AddTechnicienComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTechnicienRoutingModule { }
