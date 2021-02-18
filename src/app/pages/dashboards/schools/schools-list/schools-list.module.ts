import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsListRoutingModule } from './schools-list-routing.module';
import { SchoolsListComponent } from './schools-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconModule } from '@visurel/iconify-angular';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { SchoolsCardModule } from '../components/schools-card/schools-card.module';
import { SchoolsInfoModule } from '../components/schools-info/schools-info.module';
import { DialogValidationComponent } from '../components/dialog-validation/dialog-validation.component';


@NgModule({
  declarations: [SchoolsListComponent, DialogValidationComponent],
  imports: [
    CommonModule,
    SchoolsListRoutingModule,
    MatTabsModule,
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatDialogModule,
    SchoolsInfoModule,
    MatIconModule,
    MatTooltipModule,
    SchoolsCardModule,
    ContainerModule,

  ],
  entryComponents: [DialogValidationComponent]
})
export class SchoolsListModule { }
