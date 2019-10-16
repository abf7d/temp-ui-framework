import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from './components/layout/layout.component';
import { VisionLeftNavComponent } from './components/vision-left-nav/vision-left-nav.component';

const routes: Routes = [
  {
    path: "auth",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: VisionLeftNavComponent,
        outlet: "left"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
