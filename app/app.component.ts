import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'chartvector',
  template: '<top></top><main></main><foot></foot>',
  directives: [ HeaderComponent, HomeComponent, FooterComponent ]
})

export class AppComponent { }