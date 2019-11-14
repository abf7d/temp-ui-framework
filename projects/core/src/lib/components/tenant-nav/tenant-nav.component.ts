import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'ls-ui-tenant-nav',
  templateUrl: './tenant-nav.component.html',
  styleUrls: ['./tenant-nav.component.scss']
})
export class TenantNavComponent implements OnInit {
  showMenu: boolean;
  config: any;
  constructor(private route: Router, private eventService: EventService) { 
    this.showMenu = false;

    this.config = null;
    setTimeout( _ => this.eventService.get('tenant').subscribe(val => val !== null ? this.config = val : null));
  
  }

  ngOnInit() {
   }
  expandMenu () {
   this.showMenu = !this.showMenu;
  }
  selectApp(app) {
    this.config.applist.forEach( a => a.selected = false );
    this.config.adminlist.forEach( a => a.selected = false );

    app.selected = true;
    this.route.navigateByUrl(app.route /*, {skipLocationChange: true} */);
  }
}
