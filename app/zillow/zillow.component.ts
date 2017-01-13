import { Component } from '@angular/core';
import { Query } from './query';

@Component({
  moduleId: module.id,
  selector: 'zillow-input',
  templateUrl: 'zillow.html',
  styleUrls: ['zillow.css']
})

export class ZillowComponent {

  //indicators = ['MSP', 'MSPSF', 'MLP', 'MLPSF'];
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
  //categories = ['Z', 'C'];
  categories = [
    { value: 'Z', display: 'ZipCode' },
    { value: 'C', display: 'City' }
  ];
  //cities = ['Tampa', 'Miami'];
  cities = [
    { value: '0001', display: 'New York, NY' },
    { value: '0002', display: 'Los Angeles, CA' }
  ];

  submitted = false;

  onSubmit() { this.submitted = true; }


  //REMOVE THIS WHEN DONE
  //get diagnostic() { return JSON.stringify(this.Query); }


  /*public indicators = [
    { value: 'MSP', display: 'Median Sale Price' },
    { value: 'MSPSF', display: 'Median Sale Price per SQFT' },
    { value: 'MLP', display: 'Median List Price' },
    { value: 'MLPSF', display: 'Median List Price per SQFT' },
    { value: 'PRR', display: 'Median Sale Price' },
    { value: 'RMP', display: 'Median Sale Price' },
    { value: 'RAH', display: 'Median Sale Price' },
    { value: 'RZSF', display: 'Median Sale Price' }
  ];

  public categories = [
    { value: 'Z', display: 'ZipCode' },
    { value: 'C', display: 'City' }
  ];

  public cities = [
    { value: '0001', display: 'New York, NY' },
    { value: '0002', display: 'Los Angeles, CA' }
  ];*/

  /* Need to create model */
}
