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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var ZillowService = (function () {
    function ZillowService(http) {
        this.http = http;
        this.endpoint_url = "https://www.quandl.com/api/v3/datasets/";
        this.url_query_string = ".json?api_key=";
        this.quandl_api_key = "1oC8WM9amPy7r5xsctjr";
        this.zillow_path = "ZILL/";
    }
    ZillowService.prototype.getZillowData = function (area, areacode, indicator) {
        /* for documentation, see https://www.quandl.com/data/ZILL/documentation/documentation */
        return this.http.get(this.endpoint_url +
            this.zillow_path +
            area + areacode + "_" + indicator +
            this.url_query_string +
            this.quandl_api_key).map(function (res) { return res.json(); });
    };
    ZillowService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ZillowService);
    return ZillowService;
}());
exports.ZillowService = ZillowService;
//# sourceMappingURL=zillow.service.js.map