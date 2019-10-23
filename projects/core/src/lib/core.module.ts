import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularDraggableModule } from 'angular2-draggable';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { RightNavComponent } from './components/right-nav/right-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { TenantNavComponent } from './components/tenant-nav/tenant-nav.component';
import { EventService } from './services/event.service';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatTreeModule, MatIconModule} from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeService } from './services/theme.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularDraggableModule,
    HttpClientModule,
     BrowserAnimationsModule,
     MatIconModule, 
     MatTreeModule,
     CdkTreeModule,
     FontAwesomeModule
  ],
  declarations: [
    LayoutComponent,
    LeftNavComponent,
    RightNavComponent,
    HeaderComponent,
    TenantNavComponent
  ],
  providers: [
    EventService,
    ThemeService
  ],
  entryComponents: [
  ]
})
export class CoreModule { } // Name is temporary
