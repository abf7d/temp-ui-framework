import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent, LeftNavComponent, HeaderComponent, RightNavComponent, TenantNavComponent } from 'core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: TenantNavComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: LeftNavComponent, // todo: for now 
        outlet: 'center',
        children: [
          {
            path: '',
            component: LeftNavComponent,
            outlet: 'center-main'
          }
        ]
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
        component: HeaderComponent,
        outlet: 'center-header'
      }
    ]
  }
];

export const UsersRouting = RouterModule.forRoot(routes);