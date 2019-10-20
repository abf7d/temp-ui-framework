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
      // Put this in config service with observable
     // let dynamic = data.items.find(d => d.id === "dynamic-config");
     // let componentConfig = dynamic.components.find(c => c.name === "LsHeaderComponent");
      this.config = {
                    "style": {},
                    "logo": "http://localhost:8080/ui/assets/polus-logo.png",
                    "leftNavList": [
                        { "text": "one", "type":"text" },
                        { "text": "two", "type":"img", "src":"http://localhost:8080/ui/assets/eye.png" },
                        { "text": "three", "type":"ico", "src":"http://localhost:8080/ui/assets/zoom.png" }
                    ],
                    "rightNavList": [
                        { "text": "search-click", "type":"btn", "src":"http://localhost:8080/ui/assets/zoom.png" },
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
    }// componentConfig.config;
     // console.log('Check route resolver data')
     // console.log(data)
  }
  constructor(private eventService: EventService ) {
  
  }

  click(name, id) {
    console.log('click' + ' ' + id);
    let stream = this.eventService.get(id);
    stream.next("");
  }

}
