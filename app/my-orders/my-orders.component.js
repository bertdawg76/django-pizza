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
var order_service_1 = require('../services/order.service');
var router_1 = require('@angular/router');
var sides_service_1 = require("../services/sides.service");
var MyOrderComponent = (function () {
    function MyOrderComponent(orderService, sideService, router) {
        this.orderService = orderService;
        this.sideService = sideService;
        this.router = router;
        this.orders = [];
        this.sides = [];
        this.model = 'Observable';
    }
    MyOrderComponent.prototype.ngOnInit = function () { this.getOrders(); };
    MyOrderComponent.prototype.getOrders = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (r) {
            console.log(r);
            r.forEach(function (order) {
                console.log(order.id, order.size);
                var temp = [];
                order.toppings.forEach(function (topping) {
                    _this.orderService.getTopping(topping).subscribe(function (toppingObj) {
                        temp.push(toppingObj);
                        order.toppings = temp;
                        console.log('this is the toppings list ', toppingObj);
                    });
                });
                _this.orderService.getSize(order.size).subscribe(function (size) {
                    order.size = size;
                });
                _this.orderService.getCrust(order.crust).subscribe(function (crust) {
                    order.crust = crust;
                    //this.orders.push(order);
                });
                _this.orderService.getSides(order.sides).subscribe(function (sides) {
                    order.sides = sides;
                    _this.orders.push(order);
                });
            });
            console.log(_this.orders);
        });
    };
    MyOrderComponent.prototype.getMySides = function () {
        var _this = this;
        this.sideService.getMySides()
            .subscribe(function (sides) { return _this.sides = sides; }, function (error) { return _this.errorMessage = error; });
        console.log(this.sides);
    };
    MyOrderComponent.prototype.reOrder = function (data) {
        var _this = this;
        console.log(data);
        var oldToppings = [];
        data.toppings.forEach(function (topping) {
            oldToppings.push(topping.id);
        });
        this.orderService.addNewOrder({
            'toppings': oldToppings,
            'size': data.size.id,
            'crust': data.crust.id
        })
            .subscribe(function () { return _this.router.navigate(['/order-modal']); }, function (error) { return _this.errorMessage = error; });
    };
    MyOrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-order',
            templateUrl: './my-orders.component.html',
            styleUrls: ['my-orders.component.css']
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService, sides_service_1.SideService, router_1.Router])
    ], MyOrderComponent);
    return MyOrderComponent;
})();
exports.MyOrderComponent = MyOrderComponent;
//# sourceMappingURL=my-orders.component.js.map