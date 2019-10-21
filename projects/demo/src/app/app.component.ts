import { Component } from '@angular/core';
import { EventService } from 'core';
const demoLeftNavItems = [
  {
    group: [
      { id: "publication", text: "Publication", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } },
      { id: "publication", text: "Instruments & Resource", image: "http://localhost:8080/ui/assets/eye.png",selected: false,  event: { type: "click", id: "publication", name: "left-nav-click" } },
      { id: "publication", text: "Project Tracking", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } },
      { id: "publication", text: "Groups", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } },
      { id: "publication", text: "Pages", image: "http://localhost:8080/ui/assets/eye.png", selected: true, event: { type: "click", id: "publication", name: "left-nav-click" } },
      { id: "publication", text: "Storage Space", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } }
    ]
  }
]


// const demoLeftNavItems = [
//   {
//     group: [
//       { id: "publication", text: "Publication", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } },
//       { id: "publication", text: "Instruments & Resource", image: "http://localhost:8080/ui/assets/eye.png",selected: false,  event: { type: "click", id: "publication", name: "left-nav-click" } },
//       { id: "publication", text: "Project Tracking", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } },
//     ]
//   },
//   {
//     group: [
//       { id: "publication", text: "Groups", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } },
//     ]
//   } , {
//     group: [{ id: "publication", text: "Pages", image: "http://localhost:8080/ui/assets/eye.png", selected: true, event: { type: "click", id: "publication", name: "left-nav-click" } },
//     { id: "publication", text: "Storage Space", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" } }
//     ]
//   }
// ]


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
