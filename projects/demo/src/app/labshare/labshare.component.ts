import { Component, OnInit } from '@angular/core';
import { EventService, ThemeService } from 'core';
import { polus, labshare } from '../theme/theme';
import { ActivatedRoute } from '@angular/router';
import { Theme } from 'core';
@Component({
  selector: 'app-labshare',
  templateUrl: './labshare.component.html',
  styleUrls: ['./labshare.component.scss']
})
export class LabShareComponent implements OnInit {
  theme = "labshare";
  hideContent: boolean;
  selectedDirectory;
  
  demoHeaderItems = {
    "style": {},
    "logo": "",
    "rightNavList": [
        { "text": "search-click", "type":"btn", "src":"assets/zoom.png", "includeObj": false },
        { "text": "one", "type":"text" },
        { "text": "two", "type":"text" },
        { "text": "menu", "type":"menu", 
        "items": [
            {"text": "first item"},
            {"text": "second item"},
            {"text": "third item"},
            {"text": "fourth item"}

        ]},
        { "text": "three", "type":"text" }
    ]
};
demoLeftNavItems = 
  {
    group: [
      {
        id: "publication", text: "Publication", image: "assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" },
        children: [
          { id: "publication", text: "Test 1", image: "assets/eye.png", selected: false, event: { type: "click", id: "pub.test1", name: "left-nav-click" } },
          { id: "publication", text: "Test 2", image: "assets/eye.png", selected: false, event: { type: "click", id: "pub.test2", name: "left-nav-click" } },
          { id: "publication", text: "Test 3", image: "assets/eye.png", selected: false, event: { type: "click", id: "pub.test3", name: "left-nav-click" } },
        ]
      },
      {
        id: "publication", text: "Instruments & Resource", image: "assets/eye.png", selected: false, event: { type: "click", id: "instruments", name: "left-nav-click" },
        children: [
          {
            id: "publication", text: "Test 1", image: "assets/eye.png", selected: false, event: { type: "click", id: "instruments.1", name: "left-nav-click" },
            children: [
              { id: "publication", text: "Test 1 this is a long name Tetset tes ste ss", image: "assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.1", name: "left-nav-click" } },
              { id: "publication", text: "Test 2 this is a long name ", image: "assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.2", name: "left-nav-click" } },
              { id: "publication", text: "Test 3 this is a long name", image: "assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.3", name: "left-nav-click" } },
            ]
          },
          { id: "publication", text: "Test 2", image: "assets/eye.png", selected: false, event: { type: "click", id: "instruments.2", name: "left-nav-click" } },
          { id: "publication", text: "Test 3", image: "assets/eye.png", selected: false, event: { type: "click", id: "instruments.3", name: "left-nav-click" } },
        ]
      },
      { id: "publication", text: "Project Tracking", image: "assets/eye.png", selected: false, event: { type: "click", id: "tracking", name: "left-nav-click" } },
      { id: "publication", text: "Groups", image: "assets/eye.png", selected: false, event: { type: "click", id: "groups", name: "left-nav-click" } },
      { id: "publication", text: "Pages", image: "assets/eye.png", selected: true, event: { type: "click", id: "pages", name: "left-nav-click" } },
      { id: "publication", text: "Storage Space", image: "assets/eye.png", selected: false, event: { type: "click", id: "storage", name: "left-nav-click" } }
    ]
  };
  tenantConfig = {
    "applist": [
      { "id": "one", "route":"/labshare", text: "First App", selected: true },
         { "id": "one", "route":"/labshare/(right:test2)", text: "First App", selected: false },
         { "id": "one", "route":"/labshare/(right:test)", text: "Second App", selected: false },
         { "id": "one", "route":"polus", text: "Fourth App", selected: false },
         { "id": "one", "route":"polus", text: "Fifth App", selected: false },
     ],
   "adminlist": [
     { "id": "one", "route":"polus", text: "Fifth App", selected: false },
   ] 
};
 
  
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
    this.themeService.setActiveTheme(theme); //labshare);
    this.eventService.get('header').next(this.demoHeaderItems);
    this.eventService.get('left-nav').next(this.demoLeftNavItems);
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
