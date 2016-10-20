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
//import { LoginService } from 'login.service'
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.orderUrl = 'http://127.0.0.1:8800/orders/';
    }
    OrderService.prototype.getOrders = function () {
        var authToken = localStorage.getItem('token');
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + authToken);
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.get(this.orderUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.addOrder = function (order) {
        var authToken = localStorage.getItem('token');
        var body = JSON.stringify(order);
        console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + authToken);
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.post(this.orderUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getSize = function (id) {
        return this.http.get("http://localhost:8800/sizes/" + id + "/")
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getCrust = function (id) {
        return this.http.get("http://localhost:8800/crusts/" + id + "/")
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getTopping = function (id) {
        return this.http.get("http://localhost:8800/toppings/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getSides = function (id) {
        return this.http.get("http://localhost:8800/sides/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.addNewOrder = function (data) {
        var authToken = localStorage.getItem('token');
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Token " + authToken);
        var options = new http_2.RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.post(this.orderUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.extractData = function (res) {
        var body = res.json();
        //console.log(body);
        return body || {};
    };
    OrderService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.log(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    OrderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderService);
    return OrderService;
})();
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map