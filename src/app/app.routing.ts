import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapsComponent } from './pages/maps/maps.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'maps', component: MapsComponent },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
