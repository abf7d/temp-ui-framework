import { Injectable, Injector } from '@angular/core';
import { ConfigAPIService } from './config-api.service';
import { ConfigResolverService } from './config-resolver.service';

import { Router } from '@angular/router';

@Injectable()
export class RouteService {
    // private _configData: any;
    // private _promise: Promise<any>;
    // private _promiseDone: boolean = false;

    constructor(/*private configAPI: ConfigAPIService, private router: Router*/) { }

    /* loadConfig(): Promise<any> {
        var url: string = "/api/config";
        this._configData = null;
 
        if (this._promiseDone) {
            console.log("In Config Service. Promise is already complete.");
            return Promise.resolve();
        }
 
        if (this._promise != null) {
            console.log("In Config Service. Promise exists.  Returning it.");
            return this._promise;
        }
 
        console.log("In Config Service. Loading config data.");
        this._promise = this.http
            .get(url, { headers: new HttpHeaders() }).pipe(
            map((res: Response) => { return res; }))
            .toPromise()
            .then((data: any) => { this._configData = data; this._promiseDone = true; })
            .catch((err: any) => { this._promiseDone = true; return Promise.resolve(); });
        return this._promise;
    }
 
    get configData(): any {
        return this._configData;
    } */


    setRoutes(dictionary: any, reset: boolean, configAPI, injector: Injector) {
        const routes = [];
        var router: Router = injector.get(Router);
        return configAPI.getRouteConfig().toPromise(res => {
                if (res && res.routes) {
                const configRoutes = res.routes;
                
                    let parentRoute = router.config.find(p => p.path === "");
                    let apiResolver = ConfigResolverService;
                    parentRoute.resolve.items = apiResolver;

                    configRoutes.forEach(element => {
                        let route = this.buildRoute(element, dictionary);
                        parentRoute.children = route.children;
                        routes.push(parentRoute);
                    });

                    if (reset) {
                        router.resetConfig(routes);
                    }
                    else {
                        router.config = [...new Set([...router.config, ...routes])];
                    }
                    router.navigateByUrl(res.defaulRoute)
                }
        });


    }

    buildRoute(element, dictionary) {
        element.component = dictionary[element.component];
        if (element.children === undefined) {
            let route = { path: element.path, component: element.component, outlet: element.outlet, children: [] /*, children: children */ };
            return route;
        }
        if (element.children !== undefined) {
            const children = [];
            for (const child of element.children) {
                const route = this.buildRoute(child, dictionary);
                children.push(route);
            }
            let route = { path: element.path, component: element.component, outlet: element.outlet, children: children };
            return route;
        }
    }
}
