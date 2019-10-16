import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularDraggableModule } from 'angular2-draggable';
import { ThemeRoutingModule } from './theme.routing'
import { VisionLeftNavComponent } from "./components/vision-left-nav/vision-left-nav.component";
import { VisionCenterComponent } from "./components/vision-center/vision-center.component";
import { VisionRightComponent } from "./components/vision-right/vision-right.component";
import { VisionHeaderComponent } from "./components/vision-header/vision-header.component";
import { HttpClientModule } from '@angular/common/http';
import { LsHeaderComponent } from './components/ls-header/ls-header.component';
import { CenterHeaderComponent } from './components/center-header/center-header.component';
import { LayoutComponent } from '../../public-api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularDraggableModule,
    ThemeRoutingModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [
    LayoutComponent,
    VisionLeftNavComponent,
    VisionRightComponent,
    VisionCenterComponent,
    VisionHeaderComponent,
    LsHeaderComponent,
    CenterHeaderComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent,
    VisionLeftNavComponent],
  entryComponents: [
    LayoutComponent,
    VisionLeftNavComponent,
    VisionRightComponent,
    VisionCenterComponent,
    VisionHeaderComponent,
    LsHeaderComponent,
    CenterHeaderComponent
  ]
})
export class ThemeModule { }
