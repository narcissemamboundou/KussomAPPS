import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { MesServicesComponent } from './mes-services.component';

const routes: VexRoutes = [
  {
    path:'',
    component: MesServicesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesServicesRoutingModule { }


