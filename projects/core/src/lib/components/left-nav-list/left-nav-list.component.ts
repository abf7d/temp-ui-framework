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
  constructor(private eventService: EventService) {
    eventService.get('left-nav').subscribe(val => this.config = val);
  }

  leafClick(node) {
    this.config.group.forEach( g => g.selected = false);
    node.selected = true;
    console.log(node);
    const eventStream = this.eventService.get(node.event.name);
    eventStream.next(node.event);
  }
}
