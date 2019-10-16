import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent, VisionLeftNavComponent, VisionCenterComponent, VisionRightComponent, LsHeaderComponent, CenterHeaderComponent } from 'core';

const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: '',
        component: VisionLeftNavComponent,
        outlet: 'left'
      },
      {
        path: '',
        component: VisionCenterComponent,
        outlet: 'center',
        children: [
          {
            path: '',
            component: VisionLeftNavComponent,
            outlet: 'center-main'
          }
        ]
      },
      {
        path: '',
        component: VisionRightComponent,
        outlet: 'right'
      },
      {
        path: '',
        component: LsHeaderComponent,
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