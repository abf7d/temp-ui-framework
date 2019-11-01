import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ls-ui-tenant-nav',
  templateUrl: './tenant-nav.component.html',
  styleUrls: ['./tenant-nav.component.scss']
})
export class TenantNavComponent implements OnInit {
  showMenu: boolean;
  constructor() { 
    this.showMenu = false;
  }

  ngOnInit() {
  }
  expandMenu () {
    console
   this.showMenu = !this.showMenu;
  }
}
