import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'ls-ui-left-nav-list',
  templateUrl: './left-nav-list.component.html',
  styleUrls: ['./left-nav-list.component.scss']
})
export class LeftNavListComponent {

  public config: any;
  public header = { img: "http://localhost:8080/ui/assets/eye.png", text: "Selected Heirarchy" }
  constructor(eventService: EventService) {
    eventService.get('left-nav').subscribe(val => this.config = val);
  }
}
