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
var register_service_1 = require('../services/register.service');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(registerService, fb, router) {
        this.registerService = registerService;
        this.router = router;
        this.model = 'Observable';
        this.registerForm = fb.group({
            email: [
                '',
                [forms_1.Validators.required]
            ],
            username: [
                '',
                [forms_1.Validators.required]
            ],
            password: [
                '',
                [forms_1.Validators.required]
            ]
        });
    }
    RegisterComponent.prototype.register = function (info) {
        var _this = this;
        this.registerService.register(info)
            .subscribe(function () { return _this.router.navigate(['/login']); }, function (error) { return _this.errorMessage = alert(error); });
        console.log('you submitted: ', info);
    };
    RegisterComponent.prototype.reset = function () {
        this.registerForm.reset();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css']
        }), 
        __metadata('design:paramtypes', [register_service_1.RegisterService, forms_1.FormBuilder, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
})();
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map