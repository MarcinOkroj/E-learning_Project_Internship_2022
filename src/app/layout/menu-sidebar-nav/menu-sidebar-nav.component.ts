import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'menu-sidebar-nav',
  templateUrl: './menu-sidebar-nav.component.html',
  styleUrls: ['./menu-sidebar-nav.component.scss'],
})
export class MenuSidebarNavComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  urlAddress!: string;
  reason = '';

  menuItems: any[] = [
    {
      icon: '../../../assets/icons/domain.svg',
      title: 'Navbar.Company',
      link: '/app/companies',
      isVisible: this.auth.getUser().authority === 'ROLE_ADMIN',
    },
    {
      icon: '../../../assets/icons/group.svg',
      title: 'Navbar.Users',
      link: '/app/users',
      isVisible: this.auth.getUser().authority === 'ROLE_ADMIN',
    },
    {
      icon: '../../../assets/icons/book.svg',
      title: 'Navbar.Courses',
      link: '/app/courses/lists',
      isVisible: this.auth.getUser().authority === 'ROLE_ADMIN'
    },
    {
      icon: '../../../assets/icons/checklist_rtl.svg',
      title: 'Navbar.Tests',
      link: '/app/tests',
      isVisible: this.auth.getUser().authority === 'ROLE_ADMIN'
    },
    {
      icon: '../../../assets/icons/home.svg',
      title: 'Common.MyDashboard',
      link: '/app/dashboard',
      isVisible: this.auth.getUser().authority === 'ROLE_USER'
    },
    {
      icon: '../../../assets/icons/open-courses.svg',
      title: 'Common.OpenCourses',
      link: '/app/dashboard/open-courses',
      isVisible: this.auth.getUser().authority === 'ROLE_USER',
    },
  ];

  constructor(private auth: AuthService) {
    //
  }

  ngOnInit(): void {
    //
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
