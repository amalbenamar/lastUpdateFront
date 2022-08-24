import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTechnicienComponent } from './edit-technicien/edit-technicien.component';

const routes: Routes = [
  {path:'',component:EditTechnicienComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTechnicienRoutingModule { }
