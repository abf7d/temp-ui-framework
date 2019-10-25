import { Component } from '@angular/core';
import { EventService, ThemeService } from 'core';
import { polus, labshare } from '../theme/theme';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  theme = "polus";
  hideContent: boolean;
  selectedDirectory;
  constructor(private eventService: EventService, private themeService: ThemeService) {
    this.hideContent = false;
    const searchEvent = this.eventService.get('search-click');
    searchEvent.subscribe(val => {
      if (val !== null) {
        this.hideContent = !this.hideContent;
      }
    });
    this.selectedDirectory = "";
    this.eventService.get('left-nav-click').subscribe ( val => { this.selectedDirectory = val;
      console.log(val);
    });

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
