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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.loginUrl = 'http://127.0.0.1:8800/api-token-auth/';
        this.token = String();
        this.loggedIn = !!localStorage.getItem('token');
    }
    LoginService.prototype.login = function (info) {
        var body = JSON.stringify(info);
        console.log(body);
        var headers = new http_2.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.loginUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        this.token = body.token;
        localStorage.setItem('token', this.token);
        return body || {};
    };
    LoginService.prototype.handleError = function (error) {
        var errMsg = error.status + " : " + error.statusText + "' : Wrong Username or Password";
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.router.navigate(['/landing']);
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
})();
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map