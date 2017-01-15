"use strict";
var router_1 = require('@angular/router');
var zillow_component_1 = require('./zillow/zillow.component');
var pageNotFound_component_1 = require('../content/pageNotFound/pageNotFound.component');
var chartRoutes = [
    {
        path: 'zillow',
        component: zillow_component_1.ZillowComponent
    },
    { path: '**',
        component: pageNotFound_component_1.PageNotFoundComponent
    }
];
exports.chartRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(chartRoutes);
//# sourceMappingURL=chart.routing.js.map