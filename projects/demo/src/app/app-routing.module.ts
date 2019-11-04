import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LeftNavComponent, LeftNavListComponent, HeaderComponent, RightNavComponent, TenantNavComponent } from 'core';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';
import { LabShareComponent } from './labshare/labshare.component';
import { ConfigResolverService } from 'core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'polus',
    pathMatch: 'full'
  },
  {
    path: 'polus',
    component: LayoutComponent,
    resolve: { items: ConfigResolverService },
    children: [
      {
        path: '',
        component: LeftNavComponent, // LeftNavListComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: TestComponent,
        outlet: 'center'
      },
      {
        path: '',
        component: RightNavComponent,
        outlet: 'right'
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: TenantNavComponent,
        outlet: 'tenant'
      },
      {
        path: '',
        component: CenterHeaderComponent,
        outlet: 'center-header'
      }]
  },



  {
    path: 'labshare',
    component: LayoutComponent,
    resolve: { items: ConfigResolverService },
    children: [
      {
        path: '',
        component: LeftNavListComponent, // LeftNavListComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: LabShareComponent,
        outlet: 'center'
      },
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
      },
      {
        path: '',
        component: TenantNavComponent,
        outlet: 'tenant'
      },



      {
        path: 'test',
        component: RightNavComponent,
        outlet: 'right'
      }
      , {
        path: 'test2',
        component: LeftNavComponent,
        outlet: 'right'
      }
    ]
  }
];

export const UsersRouting = RouterModule.forRoot(routes);