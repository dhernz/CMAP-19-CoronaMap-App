import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommuniquePageRoutingModule } from './communique-routing.module';

import { CommuniquePage } from './communique.page';
import { SafePipe } from '../safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommuniquePageRoutingModule
  ],
  declarations: [CommuniquePage,SafePipe]
})
export class CommuniquePageModule {}
