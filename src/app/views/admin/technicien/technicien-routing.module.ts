import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicienComponent } from './technicien/technicien.component';

const routes: Routes = [
  {path:'',component:TechnicienComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicienRoutingModule { }
