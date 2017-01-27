import { Component } from '@angular/core';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  //moduleId: module.id,
  selector: 'chartvector',
  template: '<header-component></header-component><router-outlet></router-outlet><footer-component></footer-component>',
  styleUrls: ['./app/app.component.css'],
})

export class AppComponent { }
