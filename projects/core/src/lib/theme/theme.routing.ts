import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ThemeComponent } from './theme.component';
import { RouteResolverService } from './services/route-resolver.service';
import { VisionLeftNavComponent } from './components/vision-left-nav/vision-left-nav.component';

const routes: Routes = [
  {
    path: "auth",
    component: ThemeComponent,
    // resolve: { items: RouteResolverService }
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
