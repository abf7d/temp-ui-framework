import { Component } from '@angular/core';
import { EventService } from 'core';
const demoLeftNavItems = 
  {
    group: [
      {
        id: "publication", text: "Publication", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" },
        children: [
          { id: "publication", text: "Test 1", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "pub.test1", name: "left-nav-click" } },
          { id: "publication", text: "Test 2", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "pub.test2", name: "left-nav-click" } },
          { id: "publication", text: "Test 3", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "pub.test3", name: "left-nav-click" } },
        ]
      },
      {
        id: "publication", text: "Instruments & Resource", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments", name: "left-nav-click" },
        children: [
          {
            id: "publication", text: "Test 1", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1", name: "left-nav-click" },
            children: [
              { id: "publication", text: "Test 1 this is a long name Tetset tes ste ss", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.1", name: "left-nav-click" } },
              { id: "publication", text: "Test 2 this is a long name ", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.2", name: "left-nav-click" } },
              { id: "publication", text: "Test 3 this is a long name", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.3", name: "left-nav-click" } },
            ]
          },
          { id: "publication", text: "Test 2", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.2", name: "left-nav-click" } },
          { id: "publication", text: "Test 3", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.3", name: "left-nav-click" } },
        ]
      },
      { id: "publication", text: "Project Tracking", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "tracking", name: "left-nav-click" } },
      { id: "publication", text: "Groups", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "groups", name: "left-nav-click" } },
      { id: "publication", text: "Pages", image: "http://localhost:8080/ui/assets/eye.png", selected: true, event: { type: "click", id: "pages", name: "left-nav-click" } },
      { id: "publication", text: "Storage Space", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "storage", name: "left-nav-click" } }
    ]
  }


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  constructor(eventService: EventService) {
    eventService.get('left-nav').next(demoLeftNavItems);
  }

  title = 'demo';
}
