import { Component } from '@angular/core';
//import { CORE_DIRECTIVES } from '@angular/common';
import { QuandlService } from '../service/quandl.service';
import { Query } from './query';

@Component({
  moduleId: module.id,
  selector: 'zillow-input',
  providers: [QuandlService],
  templateUrl: 'zillow.html',
  styleUrls: ['zillow.css']
})

export class ZillowComponent {

  indicators = [
    { value: 'MSP', display: 'Median Sale Price' },
    { value: 'MSPSF', display: 'Median Sale Price per SQFT' },
    { value: 'MLP', display: 'Median List Price' },
    { value: 'MLPSF', display: 'Median List Price per SQFT' },
    { value: 'PRR', display: 'Price to Rent Ratio' },
    { value: 'RMP', display: 'Median Rent, Homes Listed for Rent' },
    { value: 'RAH', display: 'Estimated Rent, Homes Listed for Rent' },
    { value: 'RZSF', display: 'Estimated Rent per SQFT' }
  ];

  categories = [
    { value: 'Z', display: 'ZipCode' },
    { value: 'C', display: 'City' }
  ];

  cities = [
    { value: '0001', display: 'New York, NY' },
    { value: '0002', display: 'Los Angeles, CA' }
  ];

  submitted = false;

  onSubmit() {
    this.submitted = true; 
  }


}
