import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ThemeComponent, VisionLeftNavComponent } from 'core';
// import DefaultLayoutRoute

const routes: Routes = [
  {
    path: "",
    component: ThemeComponent,
    children: [
      {
        path: "",
        component: VisionLeftNavComponent,
        outlet: "left"
      },
      {
        path: '',
        component: TestComponent,
        outlet: 'center'
      }
    ]
  }
];

export const UsersRouting = RouterModule.forRoot(routes);