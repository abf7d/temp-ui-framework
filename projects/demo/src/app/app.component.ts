import { Component } from '@angular/core';
import { EventService } from 'temp-ls-ui-framework';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {

  constructor(eventService: EventService, private route: ActivatedRoute) {
    // eventService.get('left-nav').next(demoLeftNavItems);
    // eventService.get('header').next(demoHeaderItems);
    // eventService.get('tenant').next(this.tenantConfig);
    //  this.eventService.get('tenant').next(this.tenantConfig);
  }

  title = 'demo';
}
