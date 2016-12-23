﻿import { Http, Response } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

    public _pageSize: number;
    public _baseUri: string;

    constructor( @Inject(Http) public http: Http) {

    }

    set(baseUri: string, pageSize?: number): void {
        this._baseUri = baseUri;
        this._pageSize = pageSize;
    }

    get(page: number) {
        var uri = this._baseUri + page.toString() + '/' + this._pageSize.toString();

        return this.http.get(uri)
            .do(this.logData)
            .map(response => {
                console.log(response);
                return <Response>response.json();
            });
    }

    post(data?: any, mapJson: boolean = true) {
        
        if (mapJson) {
            console.log('FromPostMethod data.service.ts');
            console.log(data);
            return this.http.post(this._baseUri, data)
                .catch(this.handleError)
                .map(this.extractData);
        }
            
        else
            return this.http.post(this._baseUri, data);
    }

    delete(id: number) {
        return this.http.delete(this._baseUri + '/' + id.toString())
            .map(response => <any>(<Response>response).json())
    }

    deleteResource(resource: string) {
        return this.http.delete(resource)
            .map(response => <any>(<Response>response).json())
    }

    private extractData(res: Response) {
        let body = <any>res.json();
        console.log('logging body');
        console.log(body);
        return body || [];
    }

    private logData(data) {
        console.log('Response from post data.service.ts');
        console.log(JSON.parse(data));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}