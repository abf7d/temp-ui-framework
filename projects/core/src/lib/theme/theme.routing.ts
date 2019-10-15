import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ThemeComponent } from './theme.component';
import { RouteResolver } from './services/route-resolver';

const routes: Routes = [{
  path: "",
  component: ThemeComponent,
  resolve: { items: RouteResolver }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule { }
