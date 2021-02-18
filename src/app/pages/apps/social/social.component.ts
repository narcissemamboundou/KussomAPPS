import { Component, OnInit } from '@angular/core';
import { Link } from '../../../../@vex/interfaces/link.interface';
import { scaleIn400ms } from '../../../../@vex/animations/scale-in.animation';
import { fadeInRight400ms } from '../../../../@vex/animations/fade-in-right.animation';
import icEdit from '@iconify/icons-ic/twotone-edit';

@Component({
  selector: 'vex-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms
  ]
})
export class SocialComponent implements OnInit {

  links: Link[] = [
    {
      label: 'Mon Compte',
      route: './',
      routerLinkActiveOptions: { exact: true }
    },
    {
      label: 'Ma Fiche Publique',
      route: './timeline',
      disabled: true
    },
    {
      label: 'Mon réseau',
      route: '',
      disabled: true
    },
    {
      label: 'Mes Projets',
      route: '',
      disabled: true
    }
  ];
  icEdit=icEdit;
  constructor() { }

  ngOnInit() {
  }
}
