
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
 import { forkJoin } from 'rxjs';
import { ConfigAPIService } from './config-api.service';

@Injectable()
export class ConfigResolverService implements Resolve<any> {
    constructor(private apiService: ConfigAPIService) { 
            this._hasRun = false;
        }
    _hasRun: boolean;
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let routePath = route.routeConfig.path;
        console.log('routePath: ' + routePath);
         return  forkJoin([ 
             this.apiService.getThemeConfig(routePath).pipe(take(1)),
             this.apiService.getLayoutConfig(routePath).pipe(take(1)),
             this.apiService.getGlobalLayoutConfig().pipe(take(1))
            ]); /*forkJoin([
            this.apiService.getStaticConfig().pipe(take(1)),
            this.apiService.getDynamicConfig(routePath).pipe(take(1))],
          ); */
    }
}