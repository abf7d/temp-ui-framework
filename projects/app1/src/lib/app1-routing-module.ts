import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LeftNavComponent, LeftNavListComponent, HeaderComponent, RightNavComponent, TenantNavComponent } from 'temp-ls-ui-framework';
import { ConfigResolverService } from 'temp-ls-ui-framework';
import { App1Component } from './app1.component';
// dynamic routes with generic auth gaurd
// clean comments and code
// load auth from backend in route resolver so you can filter configs

const routes: Routes = [
  {
    path: 'app1',
    data: {
      theme: 'polus',
      config: 'polus'
    },
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
        component: App1Component,
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
      }]
  },



  {
    path: 'labshare',
    // data: {
    //   theme: 'labshare'
    // },
    data: {
      config: 'labshare'
    },
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
    data: {
      theme: 'labshare',
      config: 'labshare'
    },
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
      },
      {
        path: '',
        component: App1Component,
        outlet: 'right'
      }
    ]
  } 
];

export const UsersRouting = RouterModule.forRoot(routes);