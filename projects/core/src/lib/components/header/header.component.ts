import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'ls-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  config: any;
  ngOnInit() {
      this.config = {
                    "style": {},
                    "logo": "http://localhost:8080/ui/assets/polus-logo.png",
                    "leftNavList": [
                        { "text": "one", "type":"text" },
                        { "text": "two", "type":"img", "src":"http://localhost:8080/ui/assets/eye.png" },
                        { "text": "three", "type":"ico", "src":"http://localhost:8080/ui/assets/zoom.png" }
                    ],
                    "rightNavList": [
                        { "text": "search-click", "type":"btn", "src":"http://localhost:8080/ui/assets/zoom.png", "includeObj": false },
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
                    , "centerNavList": [
                        { "text": "one", "type":"text" },
                        { "text": "two", "type":"img", "src":"http://localhost:8080/ui/assets/rect.png" },
                        { "text": "menu", "type":"img", "src":"http://localhost:8080/ui/assets/poly.png"  }
                    ]
    }
  }
  constructor(private eventService: EventService ) {
  
  }

  click(name, id, configObj) {
    console.log('click' + ' ' + id);
    let stream = this.eventService.get(id);
    stream.next(configObj);
  }
}
