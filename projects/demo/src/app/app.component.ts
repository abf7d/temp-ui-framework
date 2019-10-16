import { Component } from '@angular/core';
import { EventService } from 'core';
const demoLeftNavItems = [
  "One", "Two", "Three"
]

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  constructor(eventService: EventService) {
    eventService.get('left-nav').next(demoLeftNavItems);
  }
  
  title = 'demo';
}
