import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HttpClientModule ,
    FormsModule 
  ]
})
export class ClientModule { }
