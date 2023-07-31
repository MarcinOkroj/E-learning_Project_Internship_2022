import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './../api/api.service';
import { PaginationInterface } from './../shared/interfaces/pagination.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pagination: PaginationInterface = {
    pageNumber: 0,
    pageSize: 11,
    totalElementsCount: 11,
    totalPages: 1,
    sort: { active: 'name', direction: 'asc' },
  };

  username: string = '';

  constructor(private auth: AuthService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private api: ApiService,
    ) {
    this.setUserName();
  }

  ngOnInit(): void {
  }

  setUserName() {
    this.username = `${this.auth.getUser().first_name} ${
      this.auth.getUser().last_name
    }`;
  }

}
