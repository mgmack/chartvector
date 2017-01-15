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
import { ContentModule } from './content/content.module';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './content/pageNotFound/pageNotFound.component';
import { AboutComponent } from './content/about/about.component';
/* Feature Components */

import { ChartComponent } from './charts/chart.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ZillowComponent } from './charts/zillow/zillow.component';


@NgModule({
	imports:      [ BrowserModule, routing, FormsModule, HttpModule, ChartModule, ContentModule, SharedModule ],
	declarations: [
		AppComponent,
		AboutComponent,
		ChartComponent,
		FooterComponent,
		HeaderComponent,
		HomeComponent,
		PageNotFoundComponent,
		ZillowComponent
	],
	providers: [ appRoutingProviders ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
