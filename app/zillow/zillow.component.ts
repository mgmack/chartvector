import { Component } from '@angular/core';
import { Query } from './query';

@Component({
  moduleId: module.id,
  selector: 'zillow-input',
  templateUrl: 'zillow.html',
  styleUrls: ['zillow.css']
})

export class ZillowComponent {

  indicators = [
    { value: 'MSP', display: 'Median Sale Price' },
    { value: 'MSPSF', display: 'Median Sale Price per SQFT' },
    { value: 'MLP', display: 'Median List Price' },
    { value: 'MLPSF', display: 'Median List Price per SQFT' },
    { value: 'PRR', display: 'Median Sale Price' },
    { value: 'RMP', display: 'Median Sale Price' },
    { value: 'RAH', display: 'Median Sale Price' },
    { value: 'RZSF', display: 'Median Sale Price' }
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

  onSubmit() { this.submitted = true; }

}
