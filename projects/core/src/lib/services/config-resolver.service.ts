
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'
import { ActivatedRouteSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ConfigAPIService } from './config-api.service';
import { ThemeService } from './theme.service';

@Injectable()
export class ConfigResolverService implements Resolve<any> {

    constructor(
        private apiService: ConfigAPIService,
        private themeService: ThemeService,

    ) { }

    resolve(route: ActivatedRouteSnapshot) {
        let routePath = route.routeConfig.path;

        if (route.routeConfig && route.routeConfig.data && route.routeConfig.data.theme) {
            this.themeService.setActiveTheme(route.routeConfig.data.theme);
        } else {
            this.themeService.setActiveTheme('default'); // todo: create token
        }

        return forkJoin([
            this.apiService.getThemeConfig(routePath).pipe(take(1)),
            this.apiService.getLayoutConfig(routePath).pipe(take(1))
        ]);
    }
}