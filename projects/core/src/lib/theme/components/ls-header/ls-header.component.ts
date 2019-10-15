import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CentralService } from '../../services/central.service';


@Component({
  selector: 'sc-ls-header-nav',
  templateUrl: './ls-header.component.html',
  styleUrls: ['./ls-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LsHeaderComponent {
  updateProps = {};

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
  constructor(
    private actRoute: ActivatedRoute,
    private centralService: CentralService) {

  }

  click(name, id) {
    console.log('click' + ' ' + id);
    let stream = this.centralService.get(id);
    stream.triggerEvent();
  }

}
