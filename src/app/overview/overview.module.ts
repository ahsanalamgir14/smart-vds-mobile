import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { IonicModule } from '@ionic/angular';
import { OverviewComponent } from './overview.component';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    IonicModule
  ],
  exports: [OverviewComponent]
})
export class OverviewModule { }
