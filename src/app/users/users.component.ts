import { UsersTableDataInterface, UserPostInterface } from './../shared/interface/users.interfaces';
import { ToastrService } from 'ngx-toastr';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { AddEditUserComponent } from './dialogs/add-edit-user/add-edit-user.component';
import { ApiService } from '../api/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email', 'companyId', 'authority', 'options'];
  //need this to work on edit and remove dialogs, will be removed later when connected to API
  dataSource = new MatTableDataSource([
    { id: 1, username: 'userName1', firstName: 'userFirstname1', lastName: 'userLastname1', email: 'userEmail1', companyId: 'userCompany1', authority: 'userRole1' },
    { id: 2, username: 'userName2', firstName: 'userFirstname2', lastName: 'userLastname2', email: 'userEmail2', companyId: 'userCompany2', authority: 'userRole2' },
    { id: 3, username: 'userName3', firstName: 'userFirstname3', lastName: 'userLastname3', email: 'userEmail3', companyId: 'userCompany3', authority: 'userRole3' }
  ]);
  //remove data from the array, just a mock right now
  filters: Partial<UsersTableDataInterface> = {};
  sortings: Partial<UsersTableDataInterface> = {};
  sortingValue: string = '';
  sortingCounter: number = 0;
  @ViewChild(MatSort) sort!: MatSort;

  pagination = {
    pageNumber: 1,
    pageSize: 15,
    totalElementsCount: 15,
    totalPages: 1
  }
  constructor(public dialog: MatDialog,
    private toastr: ToastrService,
    private api: ApiService,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.displayedColumns.forEach(val => {
      this.filters[val] = '';
      this.sortings[val] = ''
    })
    this.getDate();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  //add User function
  addUser() {
    this.dialog.open(AddEditUserComponent, {
      data: {
        title: this.translate.instant('Users.AddUser')
      }
    }).afterClosed().subscribe(val => {
      if (val) {
        //should work

        //val albo JSON parse val
        // this.api.User.postUsers(val).subscribe((data: any) => {
        //   console.log(data)
        // this.getDate();
        // }, () => {
        //   //error
        // })

        //  this.api.addUser(val).subscribe(()=>{
        //     this.getDate();
        //       this.toastr.success(this.translate.instant('Users.UserAdded'));
        //     }, () =>{
        //       this.toastr.error(this.translate.instant('Users.CouldntAddUser'), this.translate.instant('Common.Error'));
        //     })
      }
    });
  }

  //edit User function
  editUser(row: UserPostInterface) {

    this.dialog.open(AddEditUserComponent, {
      data: {
        title: this.translate.instant('Users.EditUser'),
        user: { ...row }
      },
    }).afterClosed().subscribe(val => {
      if (val) {
        val.id = row.id;


        //here will be putUsers method in the future, waiting for backend
        // this.api.User.postUsers(val).subscribe((data: any) => {
        //   console.log(data)
        // this.getDate();
        // }, () => {
        //   //error
        // })

        // this.api.editUser(val).subscribe(()=>{
        // this.getDate();
        //   this.toastr.success(this.translate.instant('Users.UserEdited'));
        // }, () =>{
        //   this.toastr.error(this.translate.instant('Users.CouldntEditUser'), this.translate.instant('Common.Error'));
        // })
      }
    });
  }

  //delete User function
  deleteUser(row: UserPostInterface) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        text: this.translate.instant('Common.AreYouSureYouWantToDeleteName').replace('{{name}}', row.username),
      }
    }).afterClosed().subscribe(val => {
      if (val) {
        // this.api.removeUser(row.id).subscribe(()=>{
        // this.getDate();
        //   this.toastr.success(this.translate.instant('Users.UserRemoved'));
        // })
      }
    });
  }

  //for now its empty, waiting for connection with api
  sortData(sort: Sort) {
  }

  applyFilter(event: any, nameEl: string) {
    const value: string = event.target.value
    this.filters[nameEl] = value;
  }

  getDate() {
    // this.api.User.getUsers().subscribe((data: any) => {
    //   console.log(data)
    // }, () => {
    //   //error
    // })

    //in MatTableDataSource needs to be an array
    // this.dataSource = new MatTableDataSource([]);
    this.pagination.pageNumber++;
  }
}
