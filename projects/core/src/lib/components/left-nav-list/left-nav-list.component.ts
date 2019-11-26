import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CONFIG_TOKEN } from '../../common/types';

@Component({
  selector: 'ls-ui-left-nav-list',
  templateUrl: './left-nav-list.component.html',
  styleUrls: ['./left-nav-list.component.scss']
})
export class LeftNavListComponent {

  public config: any;
  public header = { img: "assets/eye.png", text: "Selected Heirarchy" }
  constructor(private eventService: EventService) {
    this.config = null;
    setTimeout(_ => {
      this.eventService.get(CONFIG_TOKEN).subscribe(val => {
        val != null ? this.config = this.mapToUIObj(val) : null;
      })
    });
  }

  mapToUIObj(config) {
    return config.properties.leftNav;
  }
  
  leafClick(node) {
    this.config.group.forEach(g => g.selected = false);
    node.selected = true;
    console.log(node);
    const eventStream = this.eventService.get(node.event.name);
    eventStream.next(node.event);
  }
}
