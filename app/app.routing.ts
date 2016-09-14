import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [
  {
    path: 'chart-output',
    component: ChartComponent
  },
  {
    path: 'about',
    component: AboutComponent
  /*},
  {
    path: 'privacy',
    component:
  },
  {
    path: 'terms-of-use',
    component:
  },
  { Page not found
    path: '**',
    component: ChartModule */
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
