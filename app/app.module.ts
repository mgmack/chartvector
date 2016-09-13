import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';

/* Feature Modules */
import { ChartModule } from './chart/chart.module';

@NgModule({
	imports:      [ BrowserModule, ChartModule ],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
