import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { CONFIG_TOKEN } from '../../common/types';

@Component({
  selector: 'ls-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  config: any;
  ngOnInit() {

  }
  constructor(private eventService: EventService, private cdRef: ChangeDetectorRef) {
    this.config = null;
    // fix for ngIf - Expression has changed after it was checked
    // https://stackoverflow.com/questions/38930183/angular2-expression-has-changed-after-it-was-checked-binding-to-div-width-wi
    // setTimeout(_ => {
    //   this.eventService.get('header').subscribe(val => {
    //     if (val !== null) {
    //       this.config = val;
    //     }
    //   });
    // });

    setTimeout(_ => {
      this.eventService.get(CONFIG_TOKEN).subscribe(val => {
        val != null ? this.config = this.mapToUIObj(val) : null;
      })
    });
  }

  mapToUIObj(config) {
    return config.properties.header;
  }
  

  clickItem(item) {
    console.log('click' + ' ' + item);
   // let stream = this.eventService.get(id);
    //stream.next(configObj);
  }
}
