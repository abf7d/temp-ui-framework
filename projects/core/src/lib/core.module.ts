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
import { DefaultTheme } from './default-theme';
import { DefaultConfig } from './default-config';
import { Dictionary, Theme, THEME_TOKEN, CONFIG_TOKEN } from './common/types';

const themes: Dictionary<Theme> = {
  default: DefaultTheme
}
const configs: any = {
  default: DefaultConfig
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
      provide: THEME_TOKEN,
      useValue: themes
    },
    {
      provide: CONFIG_TOKEN,
      useValue: configs
    }
  ],
  exports: [
    LeftNavComponent
  ],
  entryComponents: [
  ]
})
export class CoreModule {
  public static forRoot(themeDictionaries?: Dictionary<Theme>, configDictionaries?: any): ModuleWithProviders {
    if (themeDictionaries) { Object.keys(themeDictionaries).forEach(key => themes[key] = themeDictionaries[key]); }
    if (configDictionaries) { Object.keys(configDictionaries).forEach(key => configs[key] = configDictionaries[key]); }
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: THEME_TOKEN,
          useValue: themes
        },
        {
          provide: CONFIG_TOKEN,
          useValue: configs
        }
      ]
    };
  }
}