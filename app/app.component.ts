import { Component } from '@angular/core';
import { ZillowService } from './charts/zillow/zillow.service';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
//import { ZillowComponent } from './zillow/zillow.component';

@Component({
  selector: 'chartvector',
  template: '<top></top><router-outlet></router-outlet><foot></foot>',
  providers: [ ZillowService ]
})

export class AppComponent { }
