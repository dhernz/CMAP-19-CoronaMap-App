import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-status',
    loadChildren: () => import('./user-status/user-status.module').then( m => m.UserStatusPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  },
  {
    path: 'pin-map',
    loadChildren: () => import('./pin-map/pin-map.module').then( m => m.PinMapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
