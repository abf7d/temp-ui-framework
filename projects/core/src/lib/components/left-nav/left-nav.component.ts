import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Identifier } from 'estree';

// For Angular Material
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  isExpanded?: boolean;
}


interface INavConfig {
  group: INavItem[];
}
interface INavItem {
  id: string;
  text: string;
  image: string;
  selected: boolean;
  event: INavEvent;
  children: INavItem[]
}
interface INavEvent {
  type: string;
  id: string;
  name: string;
}
@Component({
  selector: 'ls-ui-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {


  public config: INavConfig;
  public treeData: any[];
  public header = { img: "http://localhost:8080/ui/assets/eye.png", text: "Selected Heirarchy" }
  constructor(private eventService: EventService) {

  }
  ngOnInit(): void {
    this.eventService.get('left-nav').subscribe(val => {
      if (val !== null) {
        this.treeData = this.convertConfigToDatasource(val);
        this.dataSource = new ArrayDataSource(this.treeData);
      }
    });
  }

  convertConfigToDatasource(config: INavConfig) {
    const data = [];
    this.convertNavItems(config.group, 0, data);
    return data;
  }
  convertNavItems(items: INavItem[], level, data: any[]) {
    for (const item of items) {
      let treeItem = {
        name: item.text,
        expandable: item.children !== undefined && item.children.length > 0,
        level: level,
        config: item
      }
      data.push(treeItem);
      if (item.children !== undefined) {
        this.convertNavItems(item.children, level + 1, data);
      }
    }
  }
  faAngleRight = faAngleRight;
  faAngleDown = faAngleDown;
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);
  dataSource: any;

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  getParentNode(node: ExampleFlatNode) {
    const nodeIndex = this.treeData.indexOf(node);
    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.treeData[i].level <= node.level - 1) {
        return this.treeData[i];
      }
    }
    return null;
  }
  shouldRender(node: ExampleFlatNode) {

    let parent = this.getParentNode(node);
    let render = (!parent || parent.isExpanded);
    while (parent) {
      parent = this.getParentNode(parent);
      render = render && ((parent && parent.isExpanded) || (!parent));
    }
    return render;
  }
  getColor(level) {
    return '#' + (444 - (+level * 111));
  }
  getClass(level) {
    if (level !== 0) {
      return 'name-color';
    }
    return '';
  }
  getPadding(level) {
    return (level * 26) + 'px';
  }
  leafClick(node) {
    const eventStream = this.eventService.get(node.config.event.name);
    eventStream.next(node.config.event);
  }
}
