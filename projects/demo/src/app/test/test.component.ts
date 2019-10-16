import { Component } from '@angular/core';
import { EventService } from 'core';

const demoLeftNavItems = [
  "One", "Two", "Three"
]

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(eventService: EventService) {
    eventService.get('left-nav').next(demoLeftNavItems);
  }

}
