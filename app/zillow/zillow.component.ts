import { Component } from '@angular/core';
import { Query } from './query';

@Component({
  moduleId: module.id,
  selector: 'zillow-input',
  templateUrl: 'zillow.html',
})

export class ZillowComponent {

  indicators = ['MSP', 'MSPSF', 'MLP', 'MLPSF'];
  categories = ['Z', 'C'];
  cities = ['Tampa', 'Miami'];

  submitted = false;

  onSubmit() { this.submitted = true; }


  //REMOVE THIS WHEN DONE
  //get diagnostic() { return JSON.stringify(this.Query); }
  

  /*public indicators = [
    { value: 'MSP', display: 'Median Sale Price' },
    { value: 'MSPSF', display: 'Median Sale Price' },
    { value: 'MLP', display: 'Median Sale Price' },
    { value: 'MLPSF', display: 'Median Sale Price' },
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
