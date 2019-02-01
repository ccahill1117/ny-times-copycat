import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'app-about',
   component: AboutComponent
 },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
