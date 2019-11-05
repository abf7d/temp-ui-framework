import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector  } from '@angular/core';
import { UsersRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule, EventService } from 'core';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';
import { LabShareComponent } from './labshare/labshare.component';
import { ConfigAPIService, RouteService } from 'core';
import { LeftNavComponent, RightNavComponent, HeaderComponent, TenantNavComponent, LeftNavListComponent } from 'projects/core/src/public-api';
import { Router } from '@angular/router';

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
  "LeftNavComponent": LeftNavComponent,
  "TestComponent": TestComponent,
  "LabShareComponent": LabShareComponent,
  "RightNavComponent": RightNavComponent,
  "HeaderComponent": HeaderComponent, 
  "TenantNavComponent": TenantNavComponent,
  "CenterHeaderComponent": CenterHeaderComponent,
  "LeftNavListComponent": LeftNavListComponent,

};

export function initApp(configAPI: ConfigAPIService, eventService: EventService, injector: Injector, routeService: RouteService) {
  return () => {
    return configAPI.getGlobalLayoutConfig()
      .toPromise()
      .then((globalConfig) => {
      // routeService.setRoutes(dictionary, false, configAPI, injector).then( a => {
       eventService.get('tenant').next(globalConfig.tenant);
       // });
      });
  };
}