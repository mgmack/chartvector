import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';

/* Routing */
import { routing } from './app.routing';

/* Feature Modules */
import { ChartModule } from './chart/chart.module';

@NgModule({
	imports:      [ BrowserModule, ChartModule, routing ],
	declarations: [ AppComponent, AboutComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
