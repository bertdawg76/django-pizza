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
var pizza_order_1 = require('./pizza-order');
var order_service_1 = require('../services/order.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var PizzaOrderComponent = (function () {
    function PizzaOrderComponent(orderService, router) {
        this.orderService = orderService;
        this.router = router;
        this.orders = [];
        this.dataStream = new core_1.EventEmitter();
        this.model = 'Observable';
        this.myForm = new forms_1.FormGroup({});
    }
    PizzaOrderComponent.prototype.ngOnInit = function () { this.getOrders(); };
    PizzaOrderComponent.prototype.addOrder = function (order) {
        var _this = this;
        console.log(order);
        if (!order) {
            return;
        }
        this.orderService.addOrder(order)
            .subscribe(function () { return _this.router.navigate(['/side-modal']); }, function (error) { return _this.errorMessage = error; });
        console.log('you submitted: ', order);
        //reset();
    };
    PizzaOrderComponent.prototype.getOrders = function () {
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
                    });
                });
                _this.orderService.getSize(order.size).subscribe(function (size) {
                    order.size = size;
                });
                _this.orderService.getCrust(order.crust).subscribe(function (crust) {
                    order.crust = crust;
                    _this.orders.push(order);
                });
            });
            console.log(_this.orders); // remove me
        });
    };
    //reset(){
    //    this.myForm.reset();
    //}
    PizzaOrderComponent.prototype.summaryStatus = function (summary) {
        return {
            color: !summary.valid && !summary.pristine ? 'red' : 'black'
        };
    };
    PizzaOrderComponent.prototype.emit = function (topping) {
        console.log(topping);
        this.dataStream.emit(topping);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pizza_order_1.pizzaOrder)
    ], PizzaOrderComponent.prototype, "orderstuff", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PizzaOrderComponent.prototype, "totalprice", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PizzaOrderComponent.prototype, "dataStream", void 0);
    PizzaOrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pizza-order',
            templateUrl: './pizza-order.component.html',
            styleUrls: ['pizza-order.component.css']
        }), 
        __metadata('design:paramtypes', [order_service_1.OrderService, router_1.Router])
    ], PizzaOrderComponent);
    return PizzaOrderComponent;
})();
exports.PizzaOrderComponent = PizzaOrderComponent;
//# sourceMappingURL=pizza-order.component.js.map