import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-permission',
  templateUrl: './no-permission.component.html',
  styleUrls: ['./no-permission.component.scss']
})
export class NoPermissionComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backToDashboard(){
    this.route.navigateByUrl('app/dashboard')
  }

}
