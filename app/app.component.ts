import { Component } from '@angular/core';
import { ZillowService } from './charts/zillow/zillow.service';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './content/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ZillowComponent } from './charts/zillow/zillow.component';

@Component({
  selector: 'chartvector',
  template: '<top></top><router-outlet></router-outlet><foot></foot>',
  styleUrls: ['app.component.css'],
  providers: [ ZillowService ]
})

export class AppComponent { }
