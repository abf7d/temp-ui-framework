import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LeftNavComponent, LeftNavListComponent, HeaderComponent, RightNavComponent, TenantNavComponent } from 'temp-ls-ui-framework';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';
import { LabShareComponent } from './labshare/labshare.component';
import { ConfigResolverService } from 'temp-ls-ui-framework';

// dynamic routes with generic auth gaurd
// clean comments and code
// load auth from backend in route resolver so you can filter configs

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
        component: LeftNavComponent, 
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
        component: LeftNavListComponent, 
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
      }, 
      {
        path: 'test2',
        component: LeftNavComponent,
        outlet: 'right'
      }
    ]
  } ,

  {
    path: 'noleft',
    component: LayoutComponent,
    resolve: { items: ConfigResolverService },
    children: [
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
      }
    ]
  } 
];

export const UsersRouting = RouterModule.forRoot(routes);