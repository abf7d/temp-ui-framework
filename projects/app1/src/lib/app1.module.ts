import { NgModule } from '@angular/core';
import { App1Component } from './app1.component';



@NgModule({
  declarations: [App1Component],
  imports: [
  ],
  exports: [App1Component]
})
export class App1Module { 
  // public static forRoot(themeDictionaries?: Dictionary<Theme>, configDictionaries?: any): ModuleWithProviders {
  //   if (themeDictionaries) { Object.keys(themeDictionaries).forEach(key => themes[key] = themeDictionaries[key]); }
  //   if (configDictionaries) { Object.keys(configDictionaries).forEach(key => configs[key] = configDictionaries[key]); }
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       {
  //         provide: THEME_TOKEN,
  //         useValue: themes
  //       },
  //       {
  //         provide: CONFIG_TOKEN,
  //         useValue: configs
  //       }
  //     ]
  //   };
  // }
}
