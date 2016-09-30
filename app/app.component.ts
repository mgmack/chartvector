import { Component } from '@angular/core';
import { QuandlService } from './service/quandl.service';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'chartvector',
  template: '<top></top><router-outlet></router-outlet><foot></foot>',
  providers: [ QuandlService ]
})

export class AppComponent { }
