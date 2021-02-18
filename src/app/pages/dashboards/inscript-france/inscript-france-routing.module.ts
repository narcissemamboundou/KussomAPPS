import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { InscriptFranceComponent } from './inscript-france.component';

const routes: VexRoutes = [
  {
    path:'',
    component: InscriptFranceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptFranceRoutingModule { }
