import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesServicesRoutingModule } from './mes-services-routing.module';
import { MesServicesComponent } from './mes-services.component';


@NgModule({
  declarations: [MesServicesComponent],
  imports: [
    CommonModule,
    MesServicesRoutingModule
  ]
})


export class MesServicesModule { }
