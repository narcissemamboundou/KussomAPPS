import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDocumentsRoutingModule } from './mes-documents-routing.module';
import { MesDocumentsComponent } from './mes-documents.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';


@NgModule({
  declarations: [MesDocumentsComponent],
  imports: [
    CommonModule,
    MesDocumentsRoutingModule,

    FlexLayoutModule,
    IconModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
 
    MatDividerModule
  ]
})
export class MesDocumentsModule { }
