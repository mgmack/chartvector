import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZillowComponent } from './zillow/zillow.component';
import { PageNotFoundComponent } from '../content/pageNotFound/pageNotFound.component';

const chartRoutes: Routes = [

  {
    path: 'zillow',
    component: ZillowComponent

  },
  { path: '**',
	  component: PageNotFoundComponent

  }

];

export const chartRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(chartRoutes);
