import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialProfileRoutingModule } from './social-profile-routing.module';
import { SocialProfileComponent } from './social-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { DialogAboutMeComponent } from '../components/dialog-about-me/dialog-about-me.component';
import { DialogProjetFormComponent } from '../components/dialog-projet-form/dialog-projet-form.component';


@NgModule({
  declarations: [SocialProfileComponent ,DialogAboutMeComponent, DialogProjetFormComponent, DialogProjetFormComponent],
  exports: [
    SocialProfileComponent
  ],
  imports: [
    CommonModule,
    SocialProfileRoutingModule,
    MatIconModule,
    IconModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  entryComponents: [DialogAboutMeComponent, DialogProjetFormComponent, DialogProjetFormComponent]
})
export class SocialProfileModule {
}
