import { CUSTOM_ELEMENTS_SCHEMA , NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverListPageRoutingModule } from './discover-list-routing.module';

import { DiscoverListPage } from './discover-list.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverListPageRoutingModule
  ],
  declarations: [DiscoverListPage],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class DiscoverListPageModule {}
