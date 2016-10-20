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
var router_1 = require('@angular/router');
var register_component_1 = require('./register/register.component');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var router_guard_component_1 = require("./router-guard/router-guard.component");
var my_orders_component_1 = require("./my-orders/my-orders.component");
var landing_component_1 = require("./landing/landing.component");
var login_guard_component_1 = require("./router-guard/login-guard.component");
var modal_component_1 = require("./modal/modal.component");
var side_order_modal_component_1 = require("./side-order-modal/side-order-modal.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/landing', pathMatch: 'full' },
                    { path: 'landing', component: landing_component_1.LandingComponent },
                    { path: 'login', component: login_component_1.LoginComponent, canActivate: [login_guard_component_1.LoginGuard] },
                    { path: 'register', component: register_component_1.RegisterComponent, canActivate: [login_guard_component_1.LoginGuard] },
                    { path: 'main', component: home_component_1.HomeComponent, canActivate: [router_guard_component_1.RouterGuard] },
                    { path: 'order', component: my_orders_component_1.MyOrderComponent, canActivate: [router_guard_component_1.RouterGuard] },
                    { path: "order-modal", component: modal_component_1.OrderModal },
                    { path: "side-modal", component: side_order_modal_component_1.SideModal }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
})();
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map