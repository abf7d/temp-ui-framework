import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { CONFIG_TOKEN } from '../../common/types';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'ls-ui-tenant-nav',
  templateUrl: './tenant-nav.component.html',
  styleUrls: ['./tenant-nav.component.scss']
})
export class TenantNavComponent implements OnInit, OnDestroy {
  showMenu: boolean;
  config: any;
  selected$: BehaviorSubject<any>;
  selectedSubscription: Subscription;

  constructor(private route: Router, private eventService: EventService) {
    this.showMenu = false;
    this.config = null;
    this.selected$ = this.eventService.get('selected-tenant');
    // setTimeout( _ => this.eventService.get('tenant').subscribe(val => val !== null ? this.config = val : null));
  }

  ngOnInit() {
    setTimeout(_ => {
      this.eventService.get(CONFIG_TOKEN).subscribe(val => {
        val != null ? this.config = this.mapToUIObj(val) : null;

        this.selectedSubscription = this.selected$.subscribe(item => {
          if (item !== null && this.config !== null && this.config.applist !== null) {
            this.config.applist.forEach(a => a.selected = false);
            this.config.adminlist.forEach(a => a.selected = false);
            const app = this.config.applist.find(x => x.id == item.id);
            const admin = this.config.adminlist.find(x => x.id == item.id);
            const selected = app || admin;
            if (selected) {
              selected.selected = true;
            }
          }
        })
      })
    });
  }
  ngOnDestroy() {
    this.selectedSubscription.unsubscribe();
  }
  mapToUIObj(configObj) {
    return <IUIConfig>{
      applist: configObj.properties.tenantNav.applist.map(o => this.mapConfigObjToTenantUI(o)),
      adminlist: configObj.properties.tenantNav.adminlist.map(o => this.mapConfigObjToTenantUI(o)),
    }
  }
  mapConfigObjToTenantUI(obj) {
    return <IUITenant>{
      id: obj.id,
      route: obj.route,
      text: obj.text,
      click: obj.click,
      icon: obj.icon,
      selected: obj.selected
    };
  }
  expandMenu() {
    this.showMenu = !this.showMenu;
  }
  selectApp(app) {
    this.config.applist.forEach(a => a.selected = false);
    this.config.adminlist.forEach(a => a.selected = false);
    app.selected = true;
    this.selected$.next(app);
    this.route.navigateByUrl(app.route);
  }
}


interface IUIConfig {
  applist: IUITenant[];
  adminlist: IUITenant[];
}

interface IUITenant {
  id: string;
  route: string;
  text: string;
  click: string;
  icon: string;
  selected: boolean;
}
