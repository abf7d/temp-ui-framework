
import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { AppConfigService } from './app-config.service';
import { take } from 'rxjs/operators'
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { RoutingConfigService } from './routing-config.service';

@Injectable()
export class APIResolver implements Resolve<any> {
  constructor(private apiService: APIService, private appConfigService: AppConfigService,
    private routerConfig: RoutingConfigService, private router: Router) {
    this._hasRun = false;
  }
  _hasRun: boolean;
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let routePath = route.routeConfig.path;
    // this.getRoute();
    //const url = // your url;
    return forkJoin([
      this.apiService.getStaticConfig().pipe(take(1)),
      this.apiService.getDynamicConfig(routePath).pipe(take(1))],
    );
  }


  // Could load a default component first
  getRoute() {

    const routes = [];
    if (this._hasRun === true) {
      return;
    }
    this.routerConfig.getConfig().subscribe(res => {
      const configRoutes = res.routes;
      if (configRoutes !== undefined) {
        let parentRoute = this.router.config.find(p => p.path === "");
        configRoutes.forEach(element => {
          let route = this.buildRoute(element);
          parentRoute.children = route.children;
          routes.push(parentRoute);
        });
        this.router.resetConfig(routes);
        this._hasRun = true;
        this.router.navigateByUrl(res.defaulRoute)
      }
    });


  }

  buildRoute(element) {
    const components = this.routerConfig.components;
    element.component = components[element.component];
    if (element.children === undefined) {
      let route = { path: element.path, component: element.component, outlet: element.outlet, children: [] /*, children: children */ };
      return route;
    }
    if (element.children !== undefined) {
      const children = [];
      for (const child of element.children) {
        const route = this.buildRoute(child);
        children.push(route);
      }
      let route = { path: element.path, component: element.component, outlet: element.outlet, children: children };
      return route;
    }
  }
}