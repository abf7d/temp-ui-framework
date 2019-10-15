import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Resolve } from '@angular/router';
import { Router } from '@angular/router';
import { RoutingConfigService } from './routing-config.service';
import { APIResolver } from './api-resolver';

@Injectable()
export class RouteResolver implements Resolve<any> {
    constructor(
        private routerConfig: RoutingConfigService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.getRoute();
    }

    getRoute() {

        const routes = [];
        this.routerConfig.getConfig().subscribe(res => {
            const configRoutes = res.routes;
            if (configRoutes !== undefined) {
                let parentRoute = this.router.config.find(p => p.path === "");
                let apiResolver = APIResolver;
                parentRoute.resolve.items = apiResolver;
                configRoutes.forEach(element => {
                    let route = this.buildRoute(element);
                    parentRoute.children = route.children;
                    routes.push(parentRoute);
                });
                this.router.resetConfig(routes);
                this.router.navigateByUrl(res.defaulRoute)
            }
        });


    }

    buildRoute(element) {
        const components = this.routerConfig.components;
        element.component = components[element.component];
        if (element.children === undefined) {
            let route = { path: element.path, component: element.component, outlet: element.outlet, children: [] };
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