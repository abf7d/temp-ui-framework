import { Component, OnInit } from '@angular/core';
import { EventService } from 'temp-ls-ui-framework';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  theme = "polus";
  hideContent: boolean;
  selectedDirectory;

  constructor(private eventService: EventService) {
    this.hideContent = false;
    const searchEvent = this.eventService.get('search-click');
    searchEvent.subscribe(val => {
      if (val !== null) {
        this.hideContent = !this.hideContent;
      }
    });
    this.selectedDirectory = "Click left nav";
    this.eventService.get('left-nav-click').subscribe(val => {
      if (val) {
        this.selectedDirectory = val.id;
      }
      console.log(val);
    });

  }
  ngOnInit() {
    // set items as JsonConfig[] and pass into a LoadConfig service that validates and loads
    // const theme = this.route.snapshot.data.items.find(i => i.class == "theme") as any;
    // const layout = this.route.snapshot.data.items.find(i => i.class == "layout");

    // this.eventService.get('header').next(layout.header);
    // this.eventService.get('left-nav').next(layout.leftnav);
  }

}
