import {  NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { MesDocumentsComponent } from './mes-documents.component';

const routes: VexRoutes = [
  {
    path:'',
    component: MesDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDocumentsRoutingModule { }
