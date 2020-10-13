import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OffersDeletePageRoutingModule } from './offers-delete-routing.module';

import { OffersDeletePage } from './offers-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OffersDeletePageRoutingModule
  ],
  declarations: [OffersDeletePage]
})
export class OffersDeletePageModule {}
