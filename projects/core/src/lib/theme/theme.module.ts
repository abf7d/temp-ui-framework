import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { RouterModule } from '@angular/router';
import { AngularDraggableModule } from 'angular2-draggable';
import { ThemeRoutingModule } from './theme.routing'
import { VisionLeftNavComponent } from "./components/vision-left-nav/vision-left-nav.component";
import { VisionCenterComponent } from "./components/vision-center/vision-center.component";
import { VisionRightComponent } from "./components/vision-right/vision-right.component";
import { VisionHeaderComponent } from "./components/vision-header/vision-header.component";
import { HttpClientModule } from '@angular/common/http';
import { RoutingConfigService } from './services/routing-config.service';
import { LsHeaderComponent } from './components/ls-header/ls-header.component'
import { APIResolver } from './services/api-resolver';
import { RouteResolver } from './services/route-resolver'
import { APIService } from './services/api.service';
import { CentralService } from './services/central.service';
import { CenterHeaderComponent } from './components/center-header/center-header.component'
import { AppConfigService } from './services/app-config.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularDraggableModule,
    ThemeRoutingModule,
    HttpClientModule
  ],
  providers: [
    RoutingConfigService,
    APIResolver,
    RouteResolver,
    APIService,
    CentralService,
    AppConfigService
  ],
  declarations: [
    ThemeComponent,
    VisionLeftNavComponent,
    VisionRightComponent,
    VisionCenterComponent,
    VisionHeaderComponent,
    LsHeaderComponent,
    CenterHeaderComponent
  ],
  exports: [ThemeComponent],
  entryComponents: [
    ThemeComponent, VisionLeftNavComponent,
    VisionRightComponent,
    VisionCenterComponent,
    VisionHeaderComponent,
    LsHeaderComponent,
    CenterHeaderComponent
  ]
})
export class ThemeModule { }