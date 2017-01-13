"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { CORE_DIRECTIVES } from '@angular/common';
var quandl_service_1 = require('../service/quandl.service');
var ZillowComponent = (function () {
    function ZillowComponent() {
        this.indicators = [
            { value: 'MSP', display: 'Median Sale Price' },
            { value: 'MSPSF', display: 'Median Sale Price per SQFT' },
            { value: 'MLP', display: 'Median List Price' },
            { value: 'MLPSF', display: 'Median List Price per SQFT' },
            { value: 'PRR', display: 'Price to Rent Ratio' },
            { value: 'RMP', display: 'Median Rent, Homes Listed for Rent' },
            { value: 'RAH', display: 'Estimated Rent, Homes Listed for Rent' },
            { value: 'RZSF', display: 'Estimated Rent per SQFT' }
        ];
        this.categories = [
            { value: 'Z', display: 'ZipCode' },
            { value: 'C', display: 'City' }
        ];
        this.cities = [
            { value: '0001', display: 'New York, NY' },
            { value: '0002', display: 'Los Angeles, CA' }
        ];
        this.submitted = false;
    }
    ZillowComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    ZillowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zillow-input',
            providers: [quandl_service_1.QuandlService],
            templateUrl: 'zillow.html',
            styleUrls: ['zillow.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ZillowComponent);
    return ZillowComponent;
}());
exports.ZillowComponent = ZillowComponent;
//# sourceMappingURL=zillow.component.js.map