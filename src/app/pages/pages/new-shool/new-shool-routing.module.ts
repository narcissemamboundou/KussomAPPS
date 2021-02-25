import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewShoolComponent } from './new-shool.component';

const routes: Routes = [
  {
    path:'',
    component:NewShoolComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewShoolRoutingModule { }
