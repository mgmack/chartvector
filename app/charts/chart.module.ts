import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing, appRoutingProviders } from '../app.routing';

import { ChartComponent } from './chart.component';
import { ZillowComponent } from './zillow/zillow.component';

@NgModule({
  imports:      [ CommonModule, routing ],
  declarations: [ ChartComponent, ZillowComponent ],
  exports:      [ ChartComponent, ZillowComponent ],
  providers:    [ appRoutingProviders ]
})

export class ChartModule { }
