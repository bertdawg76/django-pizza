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
var sides_service_1 = require("../services/sides.service");
var SideOrderComponent = (function () {
    function SideOrderComponent(sideService) {
        this.sideService = sideService;
    }
    SideOrderComponent.prototype.ngOnInit = function () { this.getSides(); };
    SideOrderComponent.prototype.getSides = function () {
        var _this = this;
        this.sideService.getSides()
            .subscribe(function (sides) { return _this.sides = sides; }, function (error) { return _this.errorMessage = error; });
    };
    SideOrderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'side-order',
            templateUrl: './side-order.component.html',
            styleUrls: ['side-order.component.css']
        }), 
        __metadata('design:paramtypes', [sides_service_1.SideService])
    ], SideOrderComponent);
    return SideOrderComponent;
})();
exports.SideOrderComponent = SideOrderComponent;
//# sourceMappingURL=side-orders.component.js.map