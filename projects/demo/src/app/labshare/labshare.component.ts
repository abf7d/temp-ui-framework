import { Component, OnInit } from '@angular/core';
import { EventService, ThemeService } from 'temp-ls-ui-framework';
import { polus, labshare } from '../theme/theme';
import { ActivatedRoute } from '@angular/router';
import { Theme } from 'temp-ls-ui-framework';
@Component({
  selector: 'app-labshare',
  templateUrl: './labshare.component.html',
  styleUrls: ['./labshare.component.scss']
})
export class LabShareComponent implements OnInit {
  theme = "labshare";
  hideContent: boolean;
  selectedDirectory;
  
  constructor(private eventService: EventService, private themeService: ThemeService,
     private route: ActivatedRoute) {
    this.hideContent = false;
    const searchEvent = this.eventService.get('search-click');
    searchEvent.subscribe(val => {
      if (val !== null) {
        this.hideContent = !this.hideContent;
      }
    });
    this.selectedDirectory = "Click left nav";
    this.eventService.get('left-nav-click').subscribe ( val => { 
      if (val){
        this.selectedDirectory = val.id;
      }
      console.log(val);
    });

  }
  ngOnInit(){
    const theme = this.route.snapshot.data.items.find( i => i.class == "theme") as Theme;
    const layout = this.route.snapshot.data.items.find( i => i.class == "layout")
    
   
    this.themeService.setActiveTheme(theme); //labshare);
    this.eventService.get('header').next(layout.header);
    this.eventService.get('left-nav').next(layout.leftnav);

  //  this.eventService.get('tenant').next(this.tenantConfig);
  }

  

  changeTheme() {
    if (this.theme === "polus") {
      this.themeService.setActiveTheme(labshare);
      this.theme = "labshare";
    } else {
      this.themeService.setActiveTheme(polus);
      this.theme = "polus"
    }

  }
}
