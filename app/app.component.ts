import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'chartvector',
  template: '<top></top><router-outlet></router-outlet><foot></foot>',
  directives: [ HeaderComponent, HomeComponent, AboutComponent, FooterComponent ]
})

export class AppComponent { }