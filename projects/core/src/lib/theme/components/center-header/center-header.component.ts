import {
  Component,
  ChangeDetectionStrategy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConfigService } from '../../services/app-config.service';
import { CentralService } from '../../services/central.service';

@Component({
  selector: 'sc-center-header-nav',
  templateUrl: './center-header.component.html',
  styleUrls: ['./center-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenterHeaderComponent {

  config;

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      // Put this in config service with observable
      let dynamic = data.items.find(d => d.id === "dynamic-config");
      let componentConfig = dynamic.components.find(c => c.name === "LsHeaderComponent");
      this.config = componentConfig.config;
      console.log('Check route resolver data')
      console.log(data)
    })
  }
  constructor(private appConfigService: AppConfigService,
    private actRoute: ActivatedRoute,
    private centralService: CentralService) {

  }

  click(name, id) {
    console.log('click' + ' ' + id);
    let stream = this.centralService.get(id);
    stream.triggerEvent();
  }

}