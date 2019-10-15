import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
    private _appName: string;
    private _route: string;
    private _dynamicConfig: any;
    private _staticConfig: any;
    public get appName() {
        return this._appName;
    }
    public get route() {
        return this._route;
    }
    public get dynamicConfig() {
        return this._dynamicConfig;
    }
    public get staticConfig() {
        return this._staticConfig;
    }
    public set dynamicConfig(config) {
        this._dynamicConfig = config;
    }
    public set staticConfig(config) {
        this._staticConfig = config;
    }
}
