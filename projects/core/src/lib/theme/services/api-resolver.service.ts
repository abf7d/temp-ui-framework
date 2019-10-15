import { Injectable } from '@angular/core';
import { ApiService } from './api-service.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { take } from 'rxjs/operators'
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiResolverService implements Resolve<any> {
  constructor(private apiService: ApiService) {
    this._hasRun = false;
  }
  _hasRun: boolean;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let routePath = route.routeConfig.path;

    return forkJoin([
      this.apiService.getStaticConfig().pipe(take(1)),
      this.apiService.getDynamicConfig(routePath).pipe(take(1))],
    );
  }
}