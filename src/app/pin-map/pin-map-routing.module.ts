import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinMapPage } from './pin-map.page';

const routes: Routes = [
  {
    path: '',
    component: PinMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinMapPageRoutingModule {}
