import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Identifier } from 'estree';
import { MenuItem } from 'primeng/api';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
  img: string;
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
  public header;
  public dataSource: any;
  public navExpanded: boolean;

  public treeControl:FlatTreeControl<ExampleFlatNode>;
  public treeElementPaddingOffset:number;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.navExpanded = true;
    this.treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);
      
    setTimeout(_ => {
      this.eventService.get('left-nav').subscribe(val => {
        if (val !== null) {
          this.header = val.header;
          this.treeElementPaddingOffset = val.treeElementPaddingOffset;
          this.treeData = this.convertConfigToDatasource(val);
          this.dataSource = new ArrayDataSource(this.treeData);
          console.log(this.treeData);
        }
      });
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
        config: item,
        img: item.img
      }
      data.push(treeItem);
      if (item.children !== undefined) {
        this.convertNavItems(item.children, level + 1, data);
      }
    }
  }

  hasChild (_: number, node: ExampleFlatNode) {
    return node.expandable;
  } 

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
    return (level * this.treeElementPaddingOffset) + 'px';
  }

  leafClick(node) {
    const eventStream = this.eventService.get(node.config.event.name);
    eventStream.next(node.config.event);
  }

  toggleLeftNav() {
    this.navExpanded = !this.navExpanded;
  }



    // this.items =

        
        //   [
        //       {
        //           "label": "Documents",
        //           "data": "Documents Folder",
        //           "expandedIcon": "fa fa-folder-open",
        //           "collapsedIcon": "fa fa-folder",
        //           "children": [{
        //                   "label": "Work",
        //                   "data": "Work Folder",
        //                   "expandedIcon": "fa fa-folder-open",
        //                   "collapsedIcon": "fa fa-folder",
        //                   "children": [{"label": "Expenses.doc", "icon": "fa fa-file-word-o", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "fa fa-file-word-o", "data": "Resume Document"}]
        //               },
        //               {
        //                   "label": "Home",
        //                   "data": "Home Folder",
        //                   "expandedIcon": "fa fa-folder-open",
        //                   "collapsedIcon": "fa fa-folder",
        //                   "children": [{"label": "Invoices.txt", "icon": "fa fa-file-word-o", "data": "Invoices for this month"}]
        //               }]
        //       },
        //       {
        //           "label": "Pictures",
        //           "data": "Pictures Folder",
        //           "expandedIcon": "fa fa-folder-open",
        //           "collapsedIcon": "fa fa-folder",
        //           "children": [
        //               {"label": "barcelona.jpg", "icon": "fa fa-file-image-o", "data": "Barcelona Photo"},
        //               {"label": "logo.jpg", "icon": "fa fa-file-image-o", "data": "PrimeFaces Logo"},
        //               {"label": "primeui.png", "icon": "fa fa-file-image-o", "data": "PrimeUI Logo"}]
        //       },
        //       {
        //           "label": "Movies",
        //           "data": "Movies Folder",
        //           "expandedIcon": "fa fa-folder-open",
        //           "collapsedIcon": "fa fa-folder",
        //           "children": [{
        //                   "label": "Al Pacino",
        //                   "data": "Pacino Movies",
        //                   "children": [{"label": "Scarface", "icon": "fa fa-file-video-o", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "fa fa-file-video-o", "data": "Serpico Movie"}]
        //               },
        //               {
        //                   "label": "Robert De Niro",
        //                   "data": "De Niro Movies",
        //                   "children": [{"label": "Goodfellas", "icon": "fa fa-file-video-o", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "fa fa-file-video-o", "data": "Untouchables Movie"}]
        //               }]
        //       }
        //   ];
        //  [
        //     {
        //         label: 'File',
        //         icon: 'pi pi-fw pi-file',
        //         items: [{
        //                 label: 'New', 
        //                 icon: 'pi pi-fw pi-plus',
        //                 items: [
        //                     {label: 'Project'},
        //                     {label: 'Other'},
        //                 ]
        //             },
        //             {label: 'Open'},
        //             {separator:true},
        //             {label: 'Quit'}
        //         ]
        //     },
        //     {
        //         label: 'Edit',
        //         icon: 'pi pi-fw pi-pencil',
        //         items: [
        //             {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        //             {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        //         ]
        //     },
        //     {
        //         label: 'Help',
        //         icon: 'pi pi-fw pi-question',
        //         items: [
        //             {
        //                 label: 'Contents'
        //             },
        //             {
        //                 label: 'Search', 
        //                 icon: 'pi pi-fw pi-search', 
        //                 items: [
        //                     {
        //                         label: 'Text', 
        //                         items: [
        //                             {
        //                                 label: 'Workspace'
        //                             }
        //                         ]
        //                     },
        //                     {
        //                         label: 'File'
        //                     }
        //             ]}
        //         ]
        //     },
        //     {
        //         label: 'Actions',
        //         icon: 'pi pi-fw pi-cog',
        //         items: [
        //             {
        //                 label: 'Edit',
        //                 icon: 'pi pi-fw pi-pencil',
        //                 items: [
        //                     {label: 'Save', icon: 'pi pi-fw pi-save'},
        //                     {label: 'Update', icon: 'pi pi-fw pi-save'},
        //                 ]
        //             },
        //             {
        //                 label: 'Other',
        //                 icon: 'pi pi-fw pi-tags',
        //                 items: [
        //                     {label: 'Delete', icon: 'pi pi-fw pi-minus'}
        //                 ]
        //             }
        //         ]
        //     },
        //     {separator:true},
        //     {
        //         label: 'Quit', icon: 'pi pi-fw pi-times'
        //     }
        // ];
}
