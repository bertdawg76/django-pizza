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
var topping_service_1 = require('../services/topping.service');
var PizzaToppingComponent = (function () {
    function PizzaToppingComponent(toppingService) {
        this.toppingService = toppingService;
        this.dataStream = new core_1.EventEmitter();
        this.mode = 'Observable';
    }
    PizzaToppingComponent.prototype.ngOnInit = function () { this.getToppings(); };
    PizzaToppingComponent.prototype.emit = function (topping) {
        this.dataStream.emit(topping);
    };
    PizzaToppingComponent.prototype.getToppings = function () {
        var _this = this;
        this.toppingService.getToppings()
            .subscribe(function (toppings) { return _this.toppings = toppings; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PizzaToppingComponent.prototype, "dataStream", void 0);
    PizzaToppingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pizza-topping',
            templateUrl: './pizza-topping.component.html',
            styleUrls: ['pizza-topping.component.css']
        }), 
        __metadata('design:paramtypes', [topping_service_1.ToppingService])
    ], PizzaToppingComponent);
    return PizzaToppingComponent;
})();
exports.PizzaToppingComponent = PizzaToppingComponent;
//# sourceMappingURL=pizza-toppings.component.js.map