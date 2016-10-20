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
var sizes_service_1 = require('../services/sizes.service');
var PizzaSizeComponent = (function () {
    function PizzaSizeComponent(sizeService) {
        this.sizeService = sizeService;
        this.dataStream = new core_1.EventEmitter();
        this.mode = 'Observable';
    }
    PizzaSizeComponent.prototype.ngOnInit = function () { this.getSize(); };
    PizzaSizeComponent.prototype.emit = function (size) {
        this.dataStream.emit(size);
    };
    PizzaSizeComponent.prototype.getSize = function () {
        var _this = this;
        this.sizeService.getSize()
            .subscribe(function (sizes) { return _this.sizes = sizes; }, function (error) { return _this.errorMessage = error; });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], PizzaSizeComponent.prototype, "dataStream", void 0);
    PizzaSizeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pizza-size',
            templateUrl: './pizza-sizes.component.html',
            styleUrls: ['pizza-sizes.component.css']
        }), 
        __metadata('design:paramtypes', [sizes_service_1.SizeService])
    ], PizzaSizeComponent);
    return PizzaSizeComponent;
})();
exports.PizzaSizeComponent = PizzaSizeComponent;
//# sourceMappingURL=pizza-sizes.component.js.map