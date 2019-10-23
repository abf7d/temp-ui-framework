import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LeftNavComponent, HeaderComponent, RightNavComponent, TenantNavComponent } from 'core';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: LeftNavComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: TenantNavComponent,
        outlet: 'tenant'
      },
      {
        path: '',
        component: TestComponent, // todo: for now 
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
      }
    ]
  }
];

export const UsersRouting = RouterModule.forRoot(routes);