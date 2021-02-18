import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptFranceRoutingModule } from './inscript-france-routing.module';
import { InscriptFranceComponent } from './inscript-france.component';


@NgModule({
  declarations: [InscriptFranceComponent],
  imports: [
    CommonModule,
    InscriptFranceRoutingModule
  ]
})
export class InscriptFranceModule { }
