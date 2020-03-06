import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public items:MenuItem[];

  // isCollapsed: boolean = true;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Enroll',

        items: [
        {
          label: 'Overview',

        },
        {
          label: 'Issues',

        },
        {
          label: 'Outreach',

        },
      ]
      },
      {
        label: 'Manage',

        items: [
        {
          label: 'Members',

        },
        {
          label: 'Network',

        },
        {
          label: 'Admin',
        },
      ]
      },
      {
        label: 'Measure',
        items: [
        {
          label: 'Members',
        },
        {
          label: 'Network',
        },
        {
          label: 'Cost',
        },
      ]
      },
    ];
  }

}
