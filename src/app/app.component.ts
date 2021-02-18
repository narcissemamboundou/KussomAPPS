import { Component, Inject, LOCALE_ID, Renderer2 } from '@angular/core';
import { ConfigService } from '../@vex/services/config.service';
import { Settings } from 'luxon';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { NavigationService } from '../@vex/services/navigation.service';
import icLayers from '@iconify/icons-ic/twotone-layers';
import icAssigment from '@iconify/icons-ic/twotone-assignment';
import icContactSupport from '@iconify/icons-ic/twotone-contact-support';
import icDateRange from '@iconify/icons-ic/twotone-date-range';
import icChat from '@iconify/icons-ic/twotone-chat';
import icContacts from '@iconify/icons-ic/twotone-contacts';
import icAssessment from '@iconify/icons-ic/twotone-assessment';
import icLock from '@iconify/icons-ic/twotone-lock';
import icWatchLater from '@iconify/icons-ic/twotone-watch-later';
import icError from '@iconify/icons-ic/twotone-error';
import icAttachMoney from '@iconify/icons-ic/twotone-attach-money';
import icPersonOutline from '@iconify/icons-ic/twotone-person-outline';
import icReceipt from '@iconify/icons-ic/twotone-receipt';
import icHelp from '@iconify/icons-ic/twotone-help';
import icBook from '@iconify/icons-ic/twotone-book';
import icBubbleChart from '@iconify/icons-ic/twotone-bubble-chart';
import icFormatColorText from '@iconify/icons-ic/twotone-format-color-text';
import icStar from '@iconify/icons-ic/twotone-star';
import icViewCompact from '@iconify/icons-ic/twotone-view-compact';
import icPictureInPicture from '@iconify/icons-ic/twotone-picture-in-picture';
import icSettings from '@iconify/icons-ic/twotone-settings';
import { LayoutService } from '../@vex/services/layout.service';
import icUpdate from '@iconify/icons-ic/twotone-update';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SplashScreenService } from '../@vex/services/splash-screen.service';
import { Style, StyleService } from '../@vex/services/style.service';
import icChromeReaderMode from '@iconify/icons-ic/twotone-chrome-reader-mode';
import { ConfigName } from '../@vex/interfaces/config-name.model';
import icMail from '@iconify/icons-ic/twotone-mail';

@Component({
  selector: 'vex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KUSSOM';

  constructor(private configService: ConfigService,
              private styleService: StyleService,
              private renderer: Renderer2,
              private platform: Platform,
              @Inject(DOCUMENT) private document: Document,
              @Inject(LOCALE_ID) private localeId: string,
              private layoutService: LayoutService,
              private route: ActivatedRoute,
              private navigationService: NavigationService,
              private splashScreenService: SplashScreenService) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    /**
     * Customize the template to your needs with the ConfigService
     * Example:
     *  this.configService.updateConfig({
     *    sidenav: {
     *      title: 'Custom App',
     *      imageUrl: '//placehold.it/100x100',
     *      showCollapsePin: false
     *    },
     *    footer: {
     *      visible: false
     *    }
     *  });
     */

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap.pipe(
      map(queryParamMap => queryParamMap.has('rtl') && coerceBooleanProperty(queryParamMap.get('rtl'))),
    ).subscribe(isRtl => {
      this.document.body.dir = isRtl ? 'rtl' : 'ltr';
      this.configService.updateConfig({
        rtl: isRtl
      });
    });

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('layout'))
    ).subscribe(queryParamMap => this.configService.setConfig(queryParamMap.get('layout') as ConfigName));

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.styleService.setStyle(queryParamMap.get('style') as Style));


    /**
     * Add your own routes here
     */
    this.navigationService.items = [
      {
        type: 'link',
        label: 'InscriptFrance',
        route: '/',
        icon: icLayers,
        routerLinkActiveOptions: { exact: true }
      },
      {
        type: 'link',
        label: 'Nos écoles',
        route: 'dashboards/schools/list',
        icon: icLayers,
        routerLinkActiveOptions: { exact: true }
      },
    
      {
        type: 'subheading',
        label: 'MON COMPTE',
        children: [
          {
            type: 'link',
            label: 'Profile',
            route: '/apps/social',
            icon: icPersonOutline,
            routerLinkActiveOptions: { exact: true }
          },
          {
            type: 'link',
            label: 'Mes services',
            route: '/kussServices/mes-services',
            icon: icBook,
            
          },
          
          {
            type: 'link',
            label: 'Chat',
            route: '/apps/chat',
            icon: icChat,
            badge: {
              value: '16',
              bgClass: 'bg-cyan',
              textClass: 'text-cyan-contrast',
            },
          }
          
        ]
      },
      {
        type: 'subheading',
        label: 'SUIVI ',
        children: [
          {
            type: 'link',
            label: 'Contacts',
            route: '/apps/contacts/grid',
            icon: icContacts,
      
          },
          {
            type: 'link',
            label: 'Mes documents',
            route: '/kussServices/mes-documents',
            icon: icBook,
      
          }
          
        ]
      },

      {
        type: 'subheading',
        label: 'AUTRES',
        children: [
          
          {
            type: 'link',
            label: 'F.A.Q',
            icon: icContactSupport,
            route: '/pages/guides',
            badge: {
              value: '18',
              bgClass: 'bg-teal',
              textClass: 'text-teal-contrast',
            },
      
          },
         
          {
            type: 'link',
            label: 'Nos partenaires',
            route: '/kussServices/partenaires',
            icon: icBook,
      
          },
          
        ]
      }
      
      
    ];
  }
}
