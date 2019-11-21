// import { Theme } from '../public-api';

export const DefaultConfig: any = {
    name: "default",
    class: "config",
    properties: {
        header: {
            "logo": "fa fa-folder-o fa-2x",
            "text": "Default Text",
            "leftNavList": [],
            "centerNavList": [],
            "rightNavList": [
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "fa fa-folder-o fa-2x",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "fa fa-folder-o fa-2x",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "fa fa-folder-o fa-2x",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "fa fa-folder-o fa-2x",
                }
            ]
        },
        tenantNav: {
            applist: [
                {
                    "id": "one",
                    "route": "/labshare",
                    "text": "Labshare 1",
                    "click": "tenant-switch",
                    "icon": "fa fa-folder-o fa-2x"
                },
                {
                    "id": "one",
                    "route": "/labshare/(right:test)",
                    "text": "Labshare 2",
                    "click": "tenant-switch",
                    "icon": "fa fa-folder-o fa-2x"
                },
                {
                    "id": "one",
                    "route": "polus",
                    "text": "Polus Layout / Theme",
                    "click": "tenant-switch",
                    "icon": "fa fa-folder-o fa-2x"
                },
                {
                    "id": "one",
                    "route": "/noleft",
                    "text": "No Left Nav",
                    "click": "tenant-switch",
                    "icon": "fa fa-folder-o fa-2x"
                }
            ],
            "adminlist": [
                {
                    "id": "one",
                    "route": "polus",
                    "text": "Fifth App",
                    "click": "tenant-admin",
                    "icon": "fa fa-folder-o fa-2x"
                },
                {
                    "id": "one",
                    "route": "polus",
                    "text": "Fifth App",
                    "click": "tenant-admin",
                    "icon": "fa fa-folder-o fa-2x"
                },
                {
                    "id": "one",
                    "route": "polus",
                    "text": "Fifth App",
                    "click": "tenant-admin",
                    "icon": "fa fa-folder-o fa-2x"
                }
            ]
        },

        leftNav: {
            "logo": "fa fa-folder-o fa-2x",
            "text": "Selected Heirarchy",
            "menu": [
                {
                    "icon": "fa fa-folder-o fa-2x",
                    "router-link": "test",
                    "text": "Publication",
                    "children": [
                        {
                            "icon": "fa fa-folder-o fa-2x",
                            "text": "Test 1",
                            "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                        },
                        {
                            "icon": "fa fa-folder-o fa-2x",
                            "text": "Test 2",
                            "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                        }
                    ]
                },
                {

                    "icon": "fa fa-folder-o fa-2x",
                    "router-link": "test2",
                    "text": "Instruments & Resource",
                },
                {
                    "icon": "fa fa-folder-o fa-2x",
                    "router-link": "test2",
                    "text": "Project Tracking",

                },
                {
                    "icon": "fa fa-folder-o fa-2x",
                    "text": "Groups",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"

                },
                {
                    "icon": "fa fa-folder-o fa-2x",
                    "text": "Pages",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                },
                {
                    "icon": "fa fa-folder-o fa-2x",
                    "router-link": "test2",
                    "text": "Storage Space",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                }
            ]
        }


    }
};