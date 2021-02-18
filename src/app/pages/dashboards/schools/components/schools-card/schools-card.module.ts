import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { SchoolsCardComponent } from './schools-card.component';



@NgModule({
  declarations: [SchoolsCardComponent],
  imports: [
    CommonModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [SchoolsCardComponent]
})
export class SchoolsCardModule { }

