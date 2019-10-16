import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'core';
import { TestComponent } from './test/test.component';

console.log('app module')
@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    UsersRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
