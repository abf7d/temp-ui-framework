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

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularDraggableModule,
    HttpClientModule
  ],
  declarations: [
    LayoutComponent,
    LeftNavComponent,
    RightNavComponent,
    HeaderComponent,
    TenantNavComponent
  ],
  providers: [
    EventService
  ],
  entryComponents: [
  ]
})
export class CoreModule { } // Name is temporary
