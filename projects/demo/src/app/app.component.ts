import { Component } from '@angular/core';
import { EventService } from 'core';
import { ActivatedRoute } from '@angular/router';
// const demoLeftNavItems = 
//   {
//     group: [
//       {
//         id: "publication", text: "Publication", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "publication", name: "left-nav-click" },
//         children: [
//           { id: "publication", text: "Test 1", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "pub.test1", name: "left-nav-click" } },
//           { id: "publication", text: "Test 2", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "pub.test2", name: "left-nav-click" } },
//           { id: "publication", text: "Test 3", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "pub.test3", name: "left-nav-click" } },
//         ]
//       },
//       {
//         id: "publication", text: "Instruments & Resource", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments", name: "left-nav-click" },
//         children: [
//           {
//             id: "publication", text: "Test 1", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1", name: "left-nav-click" },
//             children: [
//               { id: "publication", text: "Test 1 this is a long name Tetset tes ste ss", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.1", name: "left-nav-click" } },
//               { id: "publication", text: "Test 2 this is a long name ", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.2", name: "left-nav-click" } },
//               { id: "publication", text: "Test 3 this is a long name", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.1.3", name: "left-nav-click" } },
//             ]
//           },
//           { id: "publication", text: "Test 2", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.2", name: "left-nav-click" } },
//           { id: "publication", text: "Test 3", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "instruments.3", name: "left-nav-click" } },
//         ]
//       },
//       { id: "publication", text: "Project Tracking", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "tracking", name: "left-nav-click" } },
//       { id: "publication", text: "Groups", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "groups", name: "left-nav-click" } },
//       { id: "publication", text: "Pages", image: "http://localhost:8080/ui/assets/eye.png", selected: true, event: { type: "click", id: "pages", name: "left-nav-click" } },
//       { id: "publication", text: "Storage Space", image: "http://localhost:8080/ui/assets/eye.png", selected: false, event: { type: "click", id: "storage", name: "left-nav-click" } }
//     ]
//   }

//   const demoHeaderItems = {
//     "style": {},
//     "logo": "http://localhost:8080/ui/assets/polus-logo.png",
//     "leftNavList": [
//         { "text": "one", "type":"text" },
//         { "text": "two", "type":"img", "src":"http://localhost:8080/ui/assets/eye.png" },
//         { "text": "three", "type":"ico", "src":"http://localhost:8080/ui/assets/zoom.png" }
//     ],
//     "rightNavList": [
//         { "text": "search-click", "type":"btn", "src":"http://localhost:8080/ui/assets/zoom.png", "includeObj": false },
//         { "text": "one", "type":"text" },
//         { "text": "two", "type":"text" },
//         { "text": "menu", "type":"menu", 
//         "items": [
//             {"text": "first item"},
//             {"text": "second item"},
//             {"text": "third item"},
//             {"text": "fourth item"}

//         ]},
//         { "text": "three", "type":"text" }
//     ]
//     , "centerNavList": [
//         { "text": "one", "type":"text" },
//         { "text": "two", "type":"img", "src":"http://localhost:8080/ui/assets/rect.png" },
//         { "text": "menu", "type":"img", "src":"http://localhost:8080/ui/assets/poly.png"  }
//     ]
// };


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {



  tenantConfig = {
    "applist": [
      { "id": "one", "route":"/labshare", text: "First App", selected: false },
         { "id": "one", "route":"/labshare/(right:test2)", text: "First App", selected: false },
         { "id": "one", "route":"/labshare/(right:test)", text: "Second App", selected: false },
         { "id": "one", "route":"polus", text: "Fourth App", selected: true },
         { "id": "one", "route":"polus", text: "Fifth App", selected: false },
     ],
   "adminlist": [
     { "id": "one", "route":"polus", text: "Fifth App", selected: false },
   ] 
};


  constructor(eventService: EventService, private route: ActivatedRoute) {
   // eventService.get('left-nav').next(demoLeftNavItems);
    // eventService.get('header').next(demoHeaderItems);
    // eventService.get('tenant').next(this.tenantConfig);


    

  //  this.eventService.get('tenant').next(this.tenantConfig);

  }

  title = 'demo';
}
