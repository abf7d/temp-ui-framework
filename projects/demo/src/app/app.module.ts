import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector } from '@angular/core';
import { UsersRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule, EventService, LayoutComponent, LeftNavComponent, RightNavComponent, HeaderComponent, TenantNavComponent, LeftNavListComponent } from 'core';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';
import { LabShareComponent } from './labshare/labshare.component';
import { ConfigAPIService, RouteService } from 'core';
import { Router } from '@angular/router';

import * as Components from "core";



console.log('app module')
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CenterHeaderComponent,
    LabShareComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    UsersRouting
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [ConfigAPIService, EventService, Injector, RouteService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

 const dictionary = {
  "TestComponent": TestComponent,
  "LabShareComponent": LabShareComponent,
  "CenterHeaderComponent": CenterHeaderComponent,
}; 


export function initApp(configAPI: ConfigAPIService, eventService: EventService, injector: Injector, routeService: RouteService) {
  return () => {
    
    /* configAPI.getRouteConfig().subscribe(routeConfig => {
      const router: Router = injector.get(Router);
      const dict = {...dictionary, ...(Components as any) };
      routeService.setRoutes( false, router, routeConfig, dict);
    }); */
    configAPI.getGlobalLayoutConfig()
      .subscribe(globalConfig => {
        eventService.get('tenant').next(globalConfig.tenant);
      });
    
  };
}