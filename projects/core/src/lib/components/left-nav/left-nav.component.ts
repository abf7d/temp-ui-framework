import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'ls-ui-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {

  public items = [];

  constructor(eventService: EventService) {
    eventService.get('left-nav').subscribe(val => this.items = val);
  }

}
