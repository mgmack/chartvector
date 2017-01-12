import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

/* App Root */
import { AppComponent } from './app.component';



/* Routing */
import { routing, appRoutingProviders } from './app.routing';

/* Feature Modules */
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AboutComponent } from './about/about.component';
/* Feature Components */

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ZillowComponent } from './zillow/zillow.component';


@NgModule({
	imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
	declarations: [ AppComponent, AboutComponent, HeaderComponent, HomeComponent, PageNotFoundComponent, FooterComponent, ZillowComponent ],
	providers: [ appRoutingProviders ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
