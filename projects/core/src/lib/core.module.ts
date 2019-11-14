import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule, MatIconModule } from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';
import { LeftNavListComponent } from './components/left-nav-list/left-nav-list.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TreeModule } from 'primeng/tree';
import { ConfigResolverService } from './services/config-resolver.service';
import { ConfigAPIService } from './services/config-api.service';
import { RouteService } from './services/route.service';

const DefaultThemes = {
  default: "default"
}


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
    SlideMenuModule,
    DragDropModule,
    TreeModule
  ],
  declarations: [
    LayoutComponent,
    LeftNavComponent,
    RightNavComponent,
    HeaderComponent,
    TenantNavComponent,
    LeftNavListComponent,
  ],
  providers: [
    EventService,
    ConfigResolverService,
    ConfigAPIService,
    RouteService,
    {
      provide: "THEME",
      useValue: DefaultThemes
    },
  ],
  exports: [
    LeftNavComponent
  ],
  entryComponents: [
  ]
})
export class CoreModule {
  public static forRoot(themeDictionaries?): ModuleWithProviders {

    if (themeDictionaries) { Object.keys(themeDictionaries).forEach(key => DefaultThemes[key] = themeDictionaries[key]); }

    console.log('themes', DefaultThemes);
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: "THEME",
          useValue: DefaultThemes
        }
      ]
    };
  }
}