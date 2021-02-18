import { Component, OnInit } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';
import { DateTime } from 'luxon';
import { trackById } from '../../../../utils/track-by';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import icClearAll from '@iconify/icons-ic/twotone-clear-all';

import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';

import icFileCopy from '@iconify/icons-ic/twotone-file-copy';

@Component({
  selector: 'vex-toolbar-notifications-dropdown',
  templateUrl: './toolbar-notifications-dropdown.component.html',
  styleUrls: ['./toolbar-notifications-dropdown.component.scss']
})
export class ToolbarNotificationsDropdownComponent implements OnInit {

  notifications: Notification[] = [
    
    {
      id: '1',
      label: 'Choix d\'école n°1 accepté',
      icon: icCheckCircle,
      colorClass: 'text-green',
      datetime: DateTime.local().minus({ hour: 9 })
    },
    
    {
      id: '2',
      label: 'Votre document campus france est prêt',
      icon: icFileCopy,
      colorClass: 'text-amber',
      datetime: DateTime.local().minus({ hour: 90 })
    }
  ];

  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icClearAll = icClearAll;
  icNotificationsOff = icNotificationsOff;
  trackById = trackById;

  constructor() { }

  ngOnInit() {
  }

}