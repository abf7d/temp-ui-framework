import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LeftNavComponent, LeftNavListComponent, HeaderComponent, RightNavComponent, TenantNavComponent } from 'core';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
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
        component: CenterHeaderComponent,
        outlet: 'center-header'
      }]
  },



  {
    path: 'list',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LeftNavListComponent, // LeftNavListComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: TestComponent,
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