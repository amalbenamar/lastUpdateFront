import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { TechnicienLayoutComponent } from './layouts/technicien-layout/technicien-layout.component';

const routes: Routes = [
  {path:'admin',component:AdminLayoutComponent,
  children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'clients',loadChildren:()=>import('./views/admin/client/client.module').then(m=>m.ClientModule)},
    {path:'add-client',loadChildren:()=>import('./views/admin/add-client/add-client.module').then(m=>m.AddClientModule)},
    {path:'techniciens',loadChildren:()=>import('./views/admin/technicien/technicien.module').then(m=>m.TechnicienModule)},
    {path:'add-technicien',loadChildren:()=>import('./views/admin/add-technicien/add-technicien.module').then(m=>m.AddTechnicienModule)},
    {path:'ajouter-ticket',loadChildren:()=>import('./views/admin/ajouter-ticket/ajouter-ticket.module').then(m=>m.AjouterTicketModule)},
    {path:'consulter-ticket/:id',loadChildren:()=>import('./views/admin/consulter-ticket/consulter-ticket.module').then(m=>m.ConsulterTicketModule)},
    {path:'edit-ticket/:id',loadChildren:()=>import('./views/admin/edit-ticket/edit-ticket.module').then(m=>m.EditTicketModule)},
    {path:'edit-client/:id',loadChildren:()=>import('./views/admin/edit-client/edit-client.module').then(m=>m.EditClientModule)},
    {path:'edit-technicien/:id',loadChildren:()=>import('./views/admin/edit-technicien/edit-technicien.module').then(m=>m.EditTechnicienModule)},
    {path:'liste-ticket',loadChildren:()=>import('./views/admin/liste-ticket/liste-ticket.module').then(m=>m.ListeTicketModule)},
    {path:'rapport',loadChildren:()=>import('./views/admin/rapport/rapport.module').then(m=>m.RapportModule)},
  ]
},
 
  {path:'technicien',component:TechnicienLayoutComponent,
  children:[  
    {path:'ajouter-ticket',loadChildren:()=>import('./views/technicien/ajouter-ticket/ajouter-ticket.module').then(m=>m.AjouterTicketModule)},
    {path:'liste-ticket',loadChildren:()=>import('./views/technicien/liste-ticket/liste-ticket.module').then(m=>m.ListeTicketModule)},
    {path:'consulter-ticket/:id',loadChildren:()=>import('./views/technicien/consulter-ticket/consulter-ticket.module').then(m=>m.ConsulterTicketModule)},
    {path:'edit-ticket/:id',loadChildren:()=>import('./views/technicien/edit-ticket/edit-ticket.module').then(m=>m.EditTicketModule)},
    {path:'profil',loadChildren:()=>import('./views/technicien/profil/profil.module').then(m=>m.ProfilModule)},
]
},
  {path:'client',component:ClientLayoutComponent,
  children:[  
    {path:'ajouter-ticket',loadChildren:()=>import('./views/client/ajouter-ticket/ajouter-ticket.module').then(m=>m.AjouterTicketModule)},
    {path:'liste-ticket',loadChildren:()=>import('./views/client/liste-ticket/liste-ticket.module').then(m=>m.ListeTicketModule)},
    {path:'consulter-ticket/:id',loadChildren:()=>import('./views/client/consulter-ticket/consulter-ticket.module').then(m=>m.ConsulterTicketModule)},
    {path:'edit-ticket/:id',loadChildren:()=>import('./views/client/edit-ticket/edit-ticket.module').then(m=>m.EditTicketModule)},
    {path:'profil',loadChildren:()=>import('./views/client/profil/profil.module').then(m=>m.ProfilModule)},

   ]
  },
  {path:'',component:LoginLayoutComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
