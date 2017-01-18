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
//import { ContentModule } from './content/content.module';
import { SharedModule } from './shared/shared.module';

/* Feature Components */
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';


@NgModule({
	imports:      [ BrowserModule, routing, FormsModule, HttpModule, SharedModule, ChartModule ],
	declarations: [ AppComponent,	HomeComponent, AboutComponent, PageNotFoundComponent ],
	providers: [ appRoutingProviders ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
