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
var crust_service_1 = require('../services/crust.service');
var PizzaCrustComponent = (function () {
    function PizzaCrustComponent(crustService) {
        this.crustService = crustService;
        this.dataStream = new core_1.EventEmitter();
        this.mode = 'Observable';
    }
    PizzaCrustComponent.prototype.ngOnInit = function () { this.getCrust(); };
    PizzaCrustComponent.prototype.emit = function (size) {
        this.dataStream.emit(size);
    };
    PizzaCrustComponent.prototype.getCrust = function () {
        var _this = this;
        this.crustService.getCrust()
            .subscribe(function (crusts) { return _this.crusts = crusts; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PizzaCrustComponent.prototype, "dataStream", void 0);
    PizzaCrustComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'crust-type',
            templateUrl: './pizza-crusts.component.html',
            styleUrls: ['pizza-crusts.component.css']
        }), 
        __metadata('design:paramtypes', [crust_service_1.CrustService])
    ], PizzaCrustComponent);
    return PizzaCrustComponent;
})();
exports.PizzaCrustComponent = PizzaCrustComponent;
//# sourceMappingURL=pizza-crusts.component.js.map