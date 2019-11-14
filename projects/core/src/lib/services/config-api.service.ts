import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable()
export class ConfigAPIService {
    private _config: Object
    private _env: string;
    public get env() {
        return this._env;
    }

    constructor(private _http: HttpClient) {
        this._env = "default";
    }
  
    getThemeConfig(id): Observable<any> {
        return this._http.get('./assets/themes/' + id + '.json');
    }

    getLayoutConfig(id): Observable<any> {
        return this._http.get('./assets/layout/' + id + '.json');
    }

    getGlobalLayoutConfig():  Observable<any> {
        return this._http.get('./assets/layout/global.json');
    }

    getRouteConfig():  Observable<any> {
        return this._http.get('./assets/route/global.json');
    }
}
