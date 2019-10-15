import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ThemeComponent } from './theme.component';
import { RouteResolverService } from './services/route-resolver.service';

const routes: Routes = [{
  path: "",
  component: ThemeComponent,
  resolve: { items: RouteResolverService }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
