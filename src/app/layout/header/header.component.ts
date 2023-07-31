import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username: string = '';

  constructor(private auth: AuthService,private router: Router,) {
    this.setUserName();
  }

  ngOnInit(): void {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);}

  setUserName() {
    this.username = `${this.auth.getUser().first_name} ${
      this.auth.getUser().last_name
    }`;
  }

  userAccount() {
    this.router.navigate(['app/profile']);
  }
}
