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
var login_service_1 = require('../services/login.service');
var HomeComponent = (function () {
    function HomeComponent(loginService) {
        this.loginService = loginService;
        this.order = {
            toppings: [],
            size: Number,
            crust: Number,
            toppings_name: [],
        };
        this.price = {
            size_price: 0,
            crust_price: 0,
            toppings_price: [0]
        };
        console.log('this is the grand total', this.grandtotal);
        this.grandtotal = new Number;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.calculate = function () {
        // var total = 0;
        var size = +this.price.size_price;
        var crust = +this.price.crust_price;
        var toppingsTotal = 0;
        for (var i = 0; i < this.price.toppings_price.length; i++) {
            toppingsTotal += +this.price.toppings_price[i];
            console.log('this is your grand total: ', toppingsTotal);
        }
        this.grandtotal = toppingsTotal + crust + size;
        console.log('this is the calculate function total: ', this.grandtotal);
        return this.grandtotal;
    };
    // Local function that is called from this component's html
    HomeComponent.prototype.pushTopping = function (event) {
        this.order.toppings.push(event.id);
        this.order.toppings_name.push(event);
        //this.order.toppings_price.push(event.topping_price);
        this.price.toppings_price.push(event.topping_price);
        //console.log('topping price is: ', event.topping_price);
        console.log('this is the topping price array ', event);
        console.log(this.order);
        console.log(event.topping_price);
        console.log('topping price array when topping added: ', this.price.toppings_price);
        console.log(event.id);
        this.calculate();
    };
    HomeComponent.prototype.pushSize = function (event) {
        this.order.size = event;
        this.price.size_price = (event.size_price);
        console.log(this.order);
        console.log('size price is: ', event);
        this.calculate();
        console.log(this.price);
    };
    HomeComponent.prototype.pushCrust = function (event) {
        this.order.crust = event;
        this.price.crust_price = (event.crust_price);
        console.log(this.order);
        console.log('crust price is: ', event.crust_price);
        this.calculate();
        console.log('this.price');
    };
    HomeComponent.prototype.removeTopping = function (event) {
        var remove = this.price.toppings_price.indexOf(event);
        var index = this.order.toppings.indexOf(event);
        console.log(index);
        this.order.toppings.splice(index, 1);
        this.order.toppings_name.splice(index, 1);
        this.price.toppings_price.splice(remove, 1);
        console.log('this is the remove event: ', event);
        console.log('toppings price array: ', this.price.toppings_price);
        this.calculate();
        console.log('this is your order', this.order);
        console.log('this is your price object ', this.price);
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-app',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map