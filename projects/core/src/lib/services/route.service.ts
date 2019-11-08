import { Injectable, Injector } from '@angular/core';
import { ConfigResolverService } from './config-resolver.service';

import { Router } from '@angular/router';

@Injectable()
export class RouteService {

    constructor() { }

    setRoutes(reset: boolean, router: Router, routeConfig, components: any) {
        const routes = [];

        if (routeConfig && routeConfig.routes) {
            const configRoutes = routeConfig.routes;

            configRoutes.forEach(element => {
                let route = this.buildRoute(element, components);
                
                routes.push(route);
            });

            if (reset) {
                router.resetConfig(routes);
            }
            else {
                router.config = [...new Set([...router.config, ...routes])];
            }
            if (routeConfig.defaulRoute !== undefined) {
                router.navigateByUrl(routeConfig.defaulRoute)
            }
        }
    }

    buildRoute(element, components) {
        if (components[element.component] !== undefined) {
            element.component = components[element.component]; 
        }
        if (element.resolve !== undefined) {
                    
            for (let attr in element.resolve) {
                element.resolve[attr] = components[element.resolve[attr]];
            } 
        }
        if (element.children === undefined) {
            let route = { resolve: element.resolve, path: element.path, component: element.component, outlet: element.outlet, children: []};
            return route;
        }
        if (element.children !== undefined) {
            const children = [];
            for (const child of element.children) {
                const route = this.buildRoute(child, components);
                children.push(route);
            }
            let route = { resolve: element.resolve, path: element.path, component: element.component, outlet: element.outlet, children: children };
            return route;
        }
    }
}