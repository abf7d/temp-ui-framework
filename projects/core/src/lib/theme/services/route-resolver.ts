import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Router } from '@angular/router';
import { RoutingConfigService } from './routing-config.service';
import { APIResolver } from './api-resolver';

@Injectable()
export class RouteResolver implements Resolve<any> {
    constructor(private routerConfig: RoutingConfigService, private router: Router) { }

    resolve() {
        this.getRoute();
    }

    getRoute() {
        const routes = [];
        this.routerConfig.getConfig().subscribe(res => {
            const configRoutes = res.routes;
            if (configRoutes !== undefined) {
                let parentRoute = this.router.config.find(p => p.path === "");
                parentRoute.resolve.items = APIResolver;
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
        const children = element.children ? element.children.map(child => this.buildRoute(child)) : [];
        return { path: element.path, component: element.component, outlet: element.outlet, children: children };
    }
}