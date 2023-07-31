import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  comeBack() {
    this.route.navigateByUrl('app/companies');
  }
}
