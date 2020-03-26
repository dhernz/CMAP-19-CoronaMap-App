import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinMapPageRoutingModule } from './pin-map-routing.module';

import { PinMapPage } from './pin-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinMapPageRoutingModule
  ],
  declarations: [PinMapPage]
})
export class PinMapPageModule {}
