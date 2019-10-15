import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { CentralService } from '../../services/central.service';

@Component({
  selector: 'sc-vision-left-nav',
  templateUrl: './vision-center.component.html',
  styleUrls: ['./vision-center.component.scss']
})
export class VisionCenterComponent implements OnInit {
  updateProps = {};
  hideSearch: boolean;
  @ContentChild('wrapper', { static: false }) wrapper: ElementRef;
  hasContent: boolean;
  constructor(private centralService: CentralService) {
    this.hideSearch = true;

  }
  ngOnInit() {
    this.centralService.get('search-click').subscribe(val => {
      this.hideSearch = !this.hideSearch;
    });
  }

  ngAfterContentInit() {

  }


}
