import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartenairesRoutingModule } from './partenaires-routing.module';
import { PartenairesComponent } from './partenaires.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [PartenairesComponent],
  imports: [
    PartenairesRoutingModule,
    CommonModule,
    FlexLayoutModule,
    IconModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class PartenairesModule { }
