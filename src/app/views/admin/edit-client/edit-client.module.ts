import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditClientRoutingModule } from './edit-client-routing.module';
import { EditClientComponent } from './edit-client/edit-client.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    EditClientComponent
  ],
  imports: [
    CommonModule,
    EditClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class EditClientModule { }
