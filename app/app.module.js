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
var content_module_1 = require('./content/content.module');
var shared_module_1 = require('./shared/shared.module');
var pageNotFound_component_1 = require('./content/pageNotFound/pageNotFound.component');
var about_component_1 = require('./content/about/about.component');
/* Feature Components */
var chart_component_1 = require('./charts/chart.component');
var header_component_1 = require('./shared/header/header.component');
var home_component_1 = require('./home/home.component');
var footer_component_1 = require('./shared/footer/footer.component');
var zillow_component_1 = require('./charts/zillow/zillow.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, http_1.HttpModule, chart_module_1.ChartModule, content_module_1.ContentModule, shared_module_1.SharedModule],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                chart_component_1.ChartComponent,
                footer_component_1.FooterComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                zillow_component_1.ZillowComponent
            ],
            providers: [app_routing_1.appRoutingProviders],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map