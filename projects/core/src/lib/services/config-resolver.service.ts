
import { Injectable, Inject } from '@angular/core';
import { take } from 'rxjs/operators'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ConfigAPIService } from './config-api.service';
import { ThemeService } from './theme.service';

@Injectable()
export class ConfigResolverService implements Resolve<any> {

    constructor(
        private apiService: ConfigAPIService,
        private themeService: ThemeService,
        @Inject("THEME") private themes
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let routePath = route.routeConfig.path;
        console.log('routePath: ' + routePath);

        console.log('available themes', this.themes)

        if (route.routeConfig.data && route.routeConfig.data.theme) {
            console.log('route.routeConfig.data.theme', route.routeConfig.data.theme)
            const th = this.themes[route.routeConfig.data.theme]
            this.themeService.setActiveTheme(th); //polus);
        }

        // this.themes[routePath];


        return forkJoin([

            this.apiService.getThemeConfig(routePath).pipe(take(1)),
            this.apiService.getLayoutConfig(routePath).pipe(take(1))
        ]);
    }
}