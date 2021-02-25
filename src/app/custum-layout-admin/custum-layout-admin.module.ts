import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustumLayoutAdminComponent } from './custum-layout-admin.component';
import { LayoutModule } from '../../@vex/layout/layout.module';
import { ConfigPanelModule } from 'src/@vex/components/config-panel/config-panel.module';
import { SidebarModule } from 'src/@vex/components/sidebar/sidebar.module';
import { FooterModule } from 'src/@vex/layout/footer/footer.module';
import { QuickpanelModule } from 'src/@vex/layout/quickpanel/quickpanel.module';
import { SidenavModule } from 'src/@vex/layout/sidenav/sidenav.module';
import { ToolbarModule } from 'src/@vex/layout/toolbar/toolbar.module';



@NgModule({
  declarations: [CustumLayoutAdminComponent],
  imports: [
    CommonModule,
    LayoutModule,
    SidenavModule,
    ToolbarModule,
    FooterModule,
    ConfigPanelModule,
    SidebarModule,
    QuickpanelModule
  ]
})
export class CustumLayoutAdminModule { }
