import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'core';
import { TestComponent } from './test/test.component';
import { CenterHeaderComponent } from './center-header/center-header.component';
import { LabShareComponent } from './labshare/labshare.component';


console.log('app module')
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CenterHeaderComponent,
    LabShareComponent
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
