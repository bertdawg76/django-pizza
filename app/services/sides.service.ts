import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Side } from '../side-orders/side-order'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class SideService {

    private sideNumberUrl: string = 'http://127.0.0.1:8800/sidenumber/';
    private sideUrl: string = 'http://127.0.0.1:8800/sides/';

    constructor (private http: Http) {}

    getMySides(): Observable<Side[]> {
        let authToken = localStorage.getItem('token');
        let headers = new Headers({ 'Content-Type': 'application/json'});
        headers.append('Authorization', `Token ${authToken}`);
        let options = new RequestOptions({ headers: headers});
        return this.http.get(this.sideNumberUrl, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    getSides(): Observable<Side[]> {
        return this.http.get(this.sideUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};

    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }


}