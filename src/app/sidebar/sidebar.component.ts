import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersManagementDialogComponent } from '../users-management-dialog/users-management-dialog.component'
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: 'user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
    { path: 'table', title: 'Clients List',  icon:'pe-7s-note2', class: '' },
    { path: 'add', title: 'add client',  icon:'pe-7s-add-user', class: '' },
    { path: 'update', title: 'update client',  icon:'pe-7s-refresh-2', class: '' },
    { path: 'typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },   
    { path: 'maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    //  { path: 'icons', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: 'upgrade', title: 'Users management',  icon:'pe-7s-users', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private dialog: MatDialog) {}


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  // checkLastItem(index: number) {
  //   if (index === this.menuItems.length - 1) {
  //     const dialogData = {
  //       title: 'Limited access',
  //       message: 'This is my dialog message.',
  //       showInput: true,
  //         inputValue: '',
  //         inputLabel: 'Input Label'
  //     };
  //     const dialogRef = this.dialog.open(UsersManagementDialogComponent, {
  //       width: '100%',
  //       data:dialogData
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result) {
  //         // Do something with the result
  //       }
  //     });
  //   }
  // }
  
  
}
