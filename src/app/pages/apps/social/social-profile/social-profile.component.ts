import { Component, OnInit, Input  } from '@angular/core';
import { FriendSuggestion } from '../interfaces/friend-suggestion.interface';

import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { fadeInRight400ms } from '../../../../../@vex/animations/fade-in-right.animation';
import { scaleIn400ms } from '../../../../../@vex/animations/scale-in.animation';
import { stagger40ms } from '../../../../../@vex/animations/stagger.animation';
import icMail from '@iconify/icons-ic/twotone-mail';
import icAccessTime from '@iconify/icons-ic/twotone-access-time';
import icAdd from '@iconify/icons-ic/twotone-add';
import icWhatshot from '@iconify/icons-ic/twotone-whatshot';
import icWork from '@iconify/icons-ic/twotone-work';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icPersonAdd from '@iconify/icons-ic/twotone-person-add';
import icCheck from '@iconify/icons-ic/twotone-check';
import icDate from '@iconify/icons-ic/twotone-date-range';
import icSchool from '@iconify/icons-ic/twotone-school';
import icContact from '@iconify/icons-ic/twotone-contacts';
import { friendSuggestions } from 'src/static-data/friend-suggestions';
import { LoginComponent } from "../../../pages/auth/login/login.component";
import { User } from '../interfaces/user.interface';
import icEdit from '@iconify/icons-ic/twotone-edit';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogProjetFormComponent } from '../components/dialog-projet-form/dialog-projet-form.component';
import { DialogAboutMeComponent } from '../components/dialog-about-me/dialog-about-me.component';
import { DialogProjetProComponent } from '../components/dialog-projet-pro/dialog-projet-pro.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vex-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss'],
  animations: [
    fadeInUp400ms,
    fadeInRight400ms,
    scaleIn400ms,
    stagger40ms
  ]
})

export class SocialProfileComponent implements OnInit {
 
  suggestions = friendSuggestions;
  icWork = icWork;
  icPhone = icPhone;
  icPersonAdd = icPersonAdd;
  icCheck = icCheck;
  icMail = icMail;
  icAccessTime = icAccessTime;
  icAdd = icAdd;
  icEdit=icEdit;
  icWhatshot = icWhatshot;
  icDate=icDate;
  icSchool=icSchool;
  icContact=icContact;

  constructor(
    //private login: LoginComponent
    
    ) {}
  

  ngOnInit(): void {
    
  }


  trackByName(index: number, friend: FriendSuggestion) {
    return friend.name;
  }
 /* openDialogPro(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogProjetProComponent, dialogConfig);
   
  }
  openDialogAbout(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogAboutMeComponent, dialogConfig);
   
  }
  openDialogForm(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogProjetFormComponent, dialogConfig);
   
  }*/
  open(){
    
  }
}
