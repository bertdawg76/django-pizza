import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Size } from '../pizza-sizes/sizes';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class SizeService {


    private sizesUrl = 'http://127.0.0.1:8800/sizes/';

    constructor (private http: Http) {}

    getSize(): Observable<Size[]> {
        return this.http.get(this.sizesUrl)
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