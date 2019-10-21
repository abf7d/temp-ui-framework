import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';




import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Tree data is for Angular Material
const TREE_DATA: ExampleFlatNode[] = [
  {
    name: 'Fruit',
    expandable: true,
    level: 0,
  }, {
    name: 'Apple',
    expandable: false,
    level: 1,
  }, {
    name: 'Banana',
    expandable: false,
    level: 1,
  }, {
    name: 'Fruit loops',
    expandable: false,
    level: 1,
  }, {
    name: 'Vegetables',
    expandable: true,
    level: 0,
  }, {
    name: 'Green',
    expandable: true,
    level: 1,
  }, {
    name: 'Broccoli',
    expandable: true,
    level: 2,
  }, {
    name: 'Next One Long Name',
    expandable: false,
    level: 3,
  },{
    name: 'Brussel sprouts',
    expandable: false,
    level: 2,
  }, {
    name: 'Orange',
    expandable: true,
    level: 1,
  }, {
    name: 'Pumpkins',
    expandable: false,
    level: 2,
  }, {
    name: 'Carrots',
    expandable: false,
    level: 2,
  }
];

// For Angular Material
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}



@Component({
  selector: 'ls-ui-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {

  public items = [];
  public header = { img: "http://localhost:8080/ui/assets/eye.png", text: "Selected Heirarchy" }
  constructor(eventService: EventService) {
    eventService.get('left-nav').subscribe(val => this.items = val);
  }

  faAngleRight =faAngleRight;
  faAngleDown =faAngleDown;
  // Below this point is all Angular Material
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  dataSource = new ArrayDataSource(TREE_DATA);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = TREE_DATA.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (TREE_DATA[i].level === node.level - 1) {
        return TREE_DATA[i];
      }
    }

    return null;
  }

  shouldRender(node: ExampleFlatNode) {
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }
  getColor(level) {
    console.log( '#' + (444 - (+level * 111)));
    return '#' + (444 - (+level * 111));
  }
  getClass(level) {
    if(level !== 0) {
    return 'name-color';
    }
    return '';
  }
}
