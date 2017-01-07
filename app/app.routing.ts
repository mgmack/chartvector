import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { ZillowComponent } from './inputs/zillow/zillow.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
const appRoutes: Routes = [

  {
    path: 'about',
    component: AboutComponent

  },
    {
    path: '',
    component: HomeComponent

  },
  { path: '**',
	  component: PageNotFoundComponent

  },

  {
    path: 'zillow',
    component: ZillowComponent

  }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
