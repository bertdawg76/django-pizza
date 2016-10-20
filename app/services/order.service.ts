import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Order } from '../pizza-order/pizza-order';
import { Observable } from 'rxjs/Observable';
//import { LoginService } from 'login.service'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class OrderService {


    private orderUrl: string = 'http://127.0.0.1:8800/orders/';

    constructor (private http: Http) {}

    getOrders(): Observable<Order[]> {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers});
        return this.http.get(this.orderUrl, options)
            .map(this.extractData)
            .catch(this.handleError);

    }


    addOrder (order: any): Observable<Order> {
        let authToken = localStorage.getItem('token');
        let body = JSON.stringify(order);
        console.log(body);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.post(this.orderUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getSize(id: string | number) {
        return this.http.get(`http://localhost:8800/sizes/${id}/`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getCrust(id: string | number) {
        return this.http.get(`http://localhost:8800/crusts/${id}/`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getTopping(id: string | number) {
        return this.http.get(`http://localhost:8800/toppings/${id}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getSides(id: string | number) {
        return this.http.get(`http://localhost:8800/sides/${id}`)
            .map(this.extractData)
            .catch(this.handleError)
    }

    addNewOrder(data) {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers });
        console.log(headers);
        return this.http.post(this.orderUrl, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }



    private extractData(res: Response) {
        let body = res.json();
        //console.log(body);
        return body || {};

    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }



}