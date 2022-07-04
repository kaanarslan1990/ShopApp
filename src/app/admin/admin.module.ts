import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
