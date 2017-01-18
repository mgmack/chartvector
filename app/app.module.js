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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
/* App Root */
var app_component_1 = require('./app.component');
/* Routing */
var app_routing_1 = require('./app.routing');
/* Feature Modules */
var chart_module_1 = require('./charts/chart.module');
//import { ContentModule } from './content/content.module';
var shared_module_1 = require('./shared/shared.module');
/* Feature Components */
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var pageNotFound_component_1 = require('./pageNotFound/pageNotFound.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, http_1.HttpModule, shared_module_1.SharedModule, chart_module_1.ChartModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, pageNotFound_component_1.PageNotFoundComponent],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map