import { Component } from '@angular/core';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './content/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  //moduleId: module.id,
  selector: 'chartvector',
  template: '<top></top><router-outlet></router-outlet><foot></foot>',
  styleUrls: ['./app/app.component.css'],
})

export class AppComponent { }
