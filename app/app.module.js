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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var hello_world_component_1 = require('./hello-world/hello-world.component');
var pizza_toppings_component_1 = require('./pizza-toppings/pizza-toppings.component');
var pizza_sizes_component_1 = require('./pizza-sizes/pizza-sizes.component');
var app_component_1 = require('./app.component');
var topping_service_1 = require("./services/topping.service");
var sizes_service_1 = require('./services/sizes.service');
var crust_service_1 = require("./services/crust.service");
var pizza_crusts_component_1 = require("./pizza-crusts/pizza-crusts.component");
var pizza_order_component_1 = require("./pizza-order/pizza-order.component");
var order_service_1 = require("./services/order.service");
var register_component_1 = require("./register/register.component");
var home_component_1 = require("./home/home.component");
var app_routing_module_1 = require("./app-routing.module");
var login_component_1 = require("./login/login.component");
var register_service_1 = require("./services/register.service");
var login_service_1 = require("./services/login.service");
var router_guard_component_1 = require("./router-guard/router-guard.component");
var my_orders_component_1 = require("./my-orders/my-orders.component");
var landing_component_1 = require("./landing/landing.component");
var login_guard_component_1 = require("./router-guard/login-guard.component");
var index_1 = require("ng2-modal/index");
var modal_component_1 = require("./modal/modal.component");
var sides_service_1 = require("./services/sides.service");
var side_orders_component_1 = require("./side-orders/side-orders.component");
var side_order_modal_component_1 = require("./side-order-modal/side-order-modal.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
                index_1.ModalModule
            ],
            declarations: [
                app_component_1.AppComponent,
                hello_world_component_1.HelloWorldComponent,
                pizza_toppings_component_1.PizzaToppingComponent,
                pizza_sizes_component_1.PizzaSizeComponent,
                pizza_crusts_component_1.PizzaCrustComponent,
                pizza_order_component_1.PizzaOrderComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                my_orders_component_1.MyOrderComponent,
                landing_component_1.LandingComponent,
                modal_component_1.OrderModal,
                side_orders_component_1.SideOrderComponent,
                side_order_modal_component_1.SideModal
            ],
            providers: [
                topping_service_1.ToppingService,
                sizes_service_1.SizeService,
                crust_service_1.CrustService,
                order_service_1.OrderService,
                register_service_1.RegisterService,
                login_service_1.LoginService,
                router_guard_component_1.RouterGuard,
                login_guard_component_1.LoginGuard,
                sides_service_1.SideService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map