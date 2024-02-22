import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
// import { HomeModule } from '../home/home.module';
// import { OverviewModule } from '../overview/overview.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    // FormsModule,
    TabsPageRoutingModule,
    // HomeModule,
    // OverviewModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
