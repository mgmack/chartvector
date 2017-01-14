import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartModule } from './charts/chart.module';
import { ContentModule } from './content/content.module';

import { AppComponent } from './app.component';

import { AboutComponent } from './content/about/about.component';

import { HomeComponent } from './home/home.component';
import { ZillowComponent } from './charts/zillow/zillow.component';
import { PageNotFoundComponent } from './content/pageNotFound/pageNotFound.component';
const appRoutes: Routes = [

  {
    path: 'about',
    component: AboutComponent

  },
    {
    path: '',
    component: HomeComponent

  },
  {
    path: 'zillow',
    component: ZillowComponent,
    data: { title: 'Real Estate Chart Creator'}

  },
  { path: '**',
	  component: PageNotFoundComponent

  }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
