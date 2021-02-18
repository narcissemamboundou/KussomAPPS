import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Schools } from '../../interfaces/schools';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icSelect from '@iconify/icons-ic/twotone-check-box';
import icSelected from '@iconify/icons-ic/twotone-check-box-outline-blank';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'vex-schools-card',
  templateUrl: './schools-card.component.html',
  styleUrls: ['./schools-card.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class SchoolsCardComponent implements OnInit {

  @Input() schools: Schools;
  @Output() infoSchool = new EventEmitter<Schools['id']>();
  @Output() toggleStar = new EventEmitter<Schools['id']>();



  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;
  icSelect= icSelect;
  icSelected =icSelected;
  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, schoolId: Schools['id']) {
    event.stopPropagation();
    this.toggleStar.emit(schoolId);
  }

}

