import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    ThemeModule
  ],
  exports: [CoreComponent]
})
export class CoreModule { }
