import { ContentChildren, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path:'',
    children:[
      {
        path:'list',
        loadChildren: ()=>import('./schools-list/schools-list.module').then(m=>m.SchoolsListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
