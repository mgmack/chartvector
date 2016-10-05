import { Component } from '@angular/core';

@Component({
  selector: 'zillow-input',
  templateUrl: 'app/inputs/zillow/zillow.html',
})

export class ZillowComponent {

  public indicators = [
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
    { value: 'Z', display: 'ZipCode' }
  ];

  /* Need to create model */
}