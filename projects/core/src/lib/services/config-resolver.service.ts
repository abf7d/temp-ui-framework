
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { ThemeService } from './theme.service';
import { ConfigService } from './config.service';

@Injectable()
export class ConfigResolverService implements Resolve<any> {

    constructor(
        private themeService: ThemeService,
        private configService: ConfigService

    ) { }

    resolve(route: ActivatedRouteSnapshot) {

        if (route.routeConfig && route.routeConfig.data && route.routeConfig.data.theme) {
            this.themeService.setActiveTheme(route.routeConfig.data.theme);
        } else {
            this.themeService.setActiveTheme('default'); // todo: create token
        }

        if (route.routeConfig && route.routeConfig.data && route.routeConfig.data.config) {
            this.configService.setActiveConfig(route.routeConfig.data.config);
        } else {
            this.configService.setActiveConfig('default'); // todo: create token
        }
        return of();
    }
}