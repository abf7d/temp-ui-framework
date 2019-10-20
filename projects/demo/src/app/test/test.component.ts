import { Component } from '@angular/core';
import { EventService } from 'core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  hideContent:boolean;
  constructor(private eventService: EventService) {

    this.hideContent = false;
    const searchEvent = this.eventService.get('search-click');
    searchEvent.subscribe( val => this.hideContent = !this.hideContent);
    
  }

}
