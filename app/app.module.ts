import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* App Root */
import { AppComponent } from './app.component';

/* Routing */
import { routing, appRoutingProviders } from './app.routing';

/* Feature Modules */
import { ChartModule } from './charts/chart.module';
import { SharedModule } from './shared/shared.module';

/* Feature Components */
import { HomeComponent } from './home/home.component';


@NgModule({
	imports:      [ BrowserModule, routing, FormsModule, HttpModule, SharedModule, ChartModule ],
	declarations: [ AppComponent,	HomeComponent ],
	providers: [ appRoutingProviders ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
