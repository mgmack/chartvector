import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* App Root */
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


/* Routing */
import { routing } from './routing/app.routing';

/* Feature Modules */
import { ChartModule } from './chart/chart.module';
/* Feature Components */

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
	imports:      [ BrowserModule, ChartModule ],
	
	declarations: [ AppComponent, AboutComponent, HeaderComponent, HomeComponent, FooterComponent ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
