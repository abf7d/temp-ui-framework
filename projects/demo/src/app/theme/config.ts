// import { Theme } from '../public-api';

export const polusConfig: any = {
    name: "polus",
    class: "config",
    properties: {
        header: {
            "logo": "icon-Polus",
            "text": "Polus",
            "leftNavList": [],
            "centerNavList": [],
            "rightNavList": [
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "icon-Search fl",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "icon-notification fl",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "icon-SettingsIcon fl",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "icon-UserIcon fl",
                }
            ]
        },
        tenantNav: {
            applist: [
                {
                    "id": "1",
                    "route": "/labshare",
                    "text": "Pages",
                    "click": "tenant-switch",
                    "icon": "icon-Pages"
                },
                {
                    "id": "2",
                    "route": "polus",
                    "text": "Polus Layout / Theme",
                    "click": "tenant-switch",
                    "icon": "icon-Polus"
                },
                {
                    "id": "3",
                    "route": "/labshare/(right:test)",
                    "text": "FOTS Application",
                    "click": "tenant-switch",
                    "icon": "icon-FOTSApp"
                },
                {
                    "id": "4",
                    "route": "/noleft",
                    "text": "Book",
                    "click": "tenant-switch",
                    "icon": "icon-Book"
                }
            ],
            "adminlist": [
                {
                    "id": "5",
                    "route": "polus",
                    "text": "Tile View",
                    "click": "tenant-admin",
                    "icon": "icon-TileView"
                },
                {
                    "id": "6",
                    "route": "polus",
                    "text": "Pages",
                    "click": "tenant-admin",
                    "icon": "icon-Pages"
                },
                {
                    "id": "7",
                    "route": "polus",
                    "text": "LS Storage",
                    "click": "tenant-admin",
                    "icon": "icon-LsStorageIcon"
                },

                {
                    "id": "8",
                    "route": "polus",
                    "text": "Groups",
                    "click": "tenant-admin",
                    "icon": "icon-Groups"
                },
                {
                    "id": "9",
                    "route": "polus",
                    "text": "Manage",
                    "click": "tenant-admin",
                    "icon": "icon-Manage"
                }
            ]
        },

        leftNav: {
            "logo": "icon-LsStorageIcon",
            "text": "Selected Heirarchy",
            "menu": [
                {
                    "icon": "icon-Folder",
                    "router-link": "test",
                    "text": "Publication",
                    "children": [
                        {
                            "icon": "icon-Folder",
                            "text": "Test 1",
                            "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                        },
                        {
                            "icon": "icon-Folder",
                            "text": "Test 2",
                            "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                        }
                    ]
                },
                {

                    "icon": "icon-Folder",
                    "router-link": "test2",
                    "text": "Instruments & Resource",
                },
                {
                    "icon": "icon-Folder",
                    "router-link": "test2",
                    "text": "Project Tracking",

                },
                {
                    "icon": "icon-Folder",
                    "text": "Groups",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"

                },
                {
                    "icon": "icon-Folder",
                    "text": "Pages",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                },
                {
                    "icon": "icon-Folder",
                    "router-link": "test2",
                    "text": "Storage Space",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                }
            ]
        }


    }
};



export const labshareConfig: any = {
    name: "labshare",
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
                    "icon": "icon-Search fl",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "icon-notification fl",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "icon-SettingsIcon fl",
                },
                {
                    "click": "search-click",
                    "type": "i",
                    "icon": "icon-UserIcon fl",
                }
            ]
        },
        tenantNav: {
            applist: [
                {
                    "id": "1",
                    "route": "/labshare",
                    "text": "Pages",
                    "click": "tenant-switch",
                    "icon": "icon-Pages"
                },
                {
                    "id": "2",
                    "route": "polus",
                    "text": "Polus Layout / Theme",
                    "click": "tenant-switch",
                    "icon": "icon-Polus"
                },
                {
                    "id": "3",
                    "route": "/labshare/(right:test)",
                    "text": "FOTS Application",
                    "click": "tenant-switch",
                    "icon": "icon-FOTSApp"
                },
                {
                    "id": "4",
                    "route": "/noleft",
                    "text": "Book",
                    "click": "tenant-switch",
                    "icon": "icon-Book"
                }
            ],
            "adminlist": [
                {
                    "id": "5",
                    "route": "polus",
                    "text": "Tile View",
                    "click": "tenant-admin",
                    "icon": "icon-TileView"
                },
                {
                    "id": "6",
                    "route": "polus",
                    "text": "Pages",
                    "click": "tenant-admin",
                    "icon": "icon-Pages"
                },
                {
                    "id": "7",
                    "route": "polus",
                    "text": "LS Storage",
                    "click": "tenant-admin",
                    "icon": "icon-LsStorageIcon"
                },

                {
                    "id": "8",
                    "route": "polus",
                    "text": "Groups",
                    "click": "tenant-admin",
                    "icon": "icon-Groups"
                },
                {
                    "id": "9",
                    "route": "polus",
                    "text": "Manage",
                    "click": "tenant-admin",
                    "icon": "icon-Manage"
                }
            ]
        },


        leftNav: {
            "logo": "icon-LsStorageIcon",
            "text": "Selected Heirarchy",
            "menu": [
                {
                    "icon": "icon-Folder",
                    "router-link": "test",
                    "text": "Publication",
                    "children": [
                        {
                            "icon": "icon-Folder",
                            "text": "Test 1",
                            "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                        },
                        {
                            "icon": "icon-Folder",
                            "text": "Test 2",
                            "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                        }
                    ]
                },
                {

                    "icon": "icon-Folder",
                    "router-link": "test2",
                    "text": "Instruments & Resource",
                },
                {
                    "icon": "icon-Folder",
                    "router-link": "test2",
                    "text": "Project Tracking",

                },
                {
                    "icon": "icon-Folder",
                    "text": "Groups",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"

                },
                {
                    "icon": "icon-Folder",
                    "text": "Pages",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                },
                {
                    "icon": "icon-Folder",
                    "router-link": "test2",
                    "text": "Storage Space",
                    "link": "https://osd.ncats.nih.gov/Shared%20Documents/PPC%20User%20Guide.pdf"
                }
            ]
        }
    }
};