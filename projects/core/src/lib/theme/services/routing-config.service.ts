import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { VisionLeftNavComponent } from '../components/vision-left-nav/vision-left-nav.component';
import { VisionCenterComponent } from '../components/vision-center/vision-center.component';
import { VisionRightComponent } from '../components/vision-right/vision-right.component';
import { VisionHeaderComponent } from '../components/vision-header/vision-header.component';
import { LsHeaderComponent } from '../components/ls-header/ls-header.component';
import { ThemeComponent } from '../theme.component';
import { CenterHeaderComponent } from '../components/center-header/center-header.component';

@Injectable()
export class RoutingConfigService {
    private _config: Object
    private _env: string;
    public get env() {
        return this._env;
    }
    public get configData() {
        return this._config;
    }

    constructor(private _http: HttpClient) {
        this._env = "default";
    }

    getConfig(): Observable<any> {
        return this._http.get('./config/' + this._env + '.json');

    }

    public components = {
        'VisionLeftNavComponent': VisionLeftNavComponent,
        'VisionCenterComponent': VisionCenterComponent,
        'VisionRightComponent': VisionRightComponent,
        'VisionHeaderComponent': VisionHeaderComponent,
        'CenterHeaderComponent': CenterHeaderComponent,
        'LsHeaderComponent': LsHeaderComponent,
        'ThemeComponent': ThemeComponent
    };

}
