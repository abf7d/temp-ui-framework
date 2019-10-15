import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class APIService {
    private _env: string;
    public get env() {
        return this._env;
    }

    constructor(private _http: HttpClient) {
        this._env = "default";
    }
    getStaticConfig(): Observable<any> {
        return new BehaviorSubject<string>('myappid');
    }
    getDynamicConfig(id): Observable<any> {
        return this._http.get('./assets/config/dynamicConfig.json');

    }
}
