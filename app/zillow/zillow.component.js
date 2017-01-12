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
var ZillowComponent = (function () {
    function ZillowComponent() {
        this.indicators = ['MSP', 'MSPSF', 'MLP', 'MLPSF'];
        this.categories = ['Z', 'C'];
        this.cities = ['Tampa', 'Miami'];
        this.submitted = false;
    }
    ZillowComponent.prototype.onSubmit = function () { this.submitted = true; };
    ZillowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zillow-input',
            templateUrl: 'zillow.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ZillowComponent);
    return ZillowComponent;
}());
exports.ZillowComponent = ZillowComponent;
//# sourceMappingURL=zillow.component.js.map