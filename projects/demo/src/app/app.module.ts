import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { UsersRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule, EventService } from 'core';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';
import { LabShareComponent } from './labshare/labshare.component';
import { ConfigAPIService } from 'core';
import { HttpClient } from '@angular/common/http';


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
      deps: [ConfigAPIService, EventService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



export function initApp(configAPI: ConfigAPIService, eventService: EventService) {
  return () => {
    return configAPI.getGlobalLayoutConfig()
      .toPromise()
      .then((globalConfig) => {
       eventService.get('tenant').next(globalConfig.tenant);
      });
  };
}