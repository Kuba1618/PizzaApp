import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditComponent } from './edit/edit.component';




@NgModule({

  imports: [
    CommonModule,
    AdminRoutingModule

  ],

  declarations: [EditComponent]
})
export class AdminModule { }
