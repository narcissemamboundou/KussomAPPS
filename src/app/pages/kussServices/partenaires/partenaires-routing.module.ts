import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { PartenairesComponent } from './partenaires.component';

const routes: VexRoutes = [
  {
    path: '',
    component: PartenairesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenairesRoutingModule { }

