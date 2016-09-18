"use strict";
var router_1 = require('@angular/router');
var chart_component_1 = require('./chart/chart.component');
var about_component_1 = require('./about.component');
var appRoutes = [
    {
        path: 'chart-output',
        component: chart_component_1.ChartComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map