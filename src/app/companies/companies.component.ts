import { ApiService } from './../api/api.service';
import { PaginationInterface } from './../shared/interfaces/pagination.interface';
import { CompanyInterface } from './../shared/interfaces/company.interface';
import {
  Component,
  OnInit,
} from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCompanyComponent } from './dialogs/add-edit-company/add-edit-company.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogComponent } from '../shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  pagination: PaginationInterface = {
    pageNumber: 0,
    pageSize: 11,
    totalElementsCount: 11,
    totalPages: 1,
    sort: { active: 'name', direction: 'asc' },
  };

  company: CompanyInterface = {
    id: 0,
    name: '',
    email: '',
    address: '',
  };

  displayedColumns: string[] = ['name', 'address', 'email', 'options'];
  dataSource: any;
  filter: string = '';
  filters: any = {
    name: '',
    email: '',
    address: '',
  };
  companies: CompanyInterface[] = [];

  constructor(
    private dialog: MatDialog,
    private toastr: ToastrService,
    private api: ApiService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.companies);
    this.getCompanies();
  }

  clearFilters() {
    (this.filters.name = ''),
      (this.filters.email = ''),
      (this.filters.address = ''),
      (this.filter = ''),
      this.getCompanies();
  }

  clearFilter(filter: string) {
    this.filters[filter] = '';
    this.createFilter()
    this.getCompanies();
  }

  createFilter(){
    this.filter = '';
    for (const key in this.filters) {
      if (this.filters.hasOwnProperty(key) && this.filters[key]) {
        const a = this.filters[key];
        this.filter += key + '=' + a + '&';
      }
    }
  }

  applyFilter(event: any, data: string) {
    const value = event.target.value;
    this.filters[data] = value;
    this.createFilter()
    this.pagination.pageNumber = 0;
    this.getCompanies();
  }

  sortDat(sort: Sort) {
    this.pagination.sort = sort;
    this.pagination.pageNumber = 0;
    this.getCompanies();
  }

  loadMore() {
    this.pagination.pageNumber++;
    this.getCompanies();
  }

  getCompanies() {
    this.api.Company.getCompanies(
      this.pagination.pageNumber,
      this.pagination.pageSize,
      this.pagination.sort,
      this.filter
    ).subscribe((company: any[]) => {
      if (this.pagination.pageNumber === 0) {
        this.companies = [...company];
      } else {
        this.companies = this.companies.concat(company);
      }
      this.dataSource = new MatTableDataSource(this.companies);
    });
  }

  addCompany() {
    this.dialog
      .open(AddEditCompanyComponent, {
        data: {
          title: this.translate.instant('Company.AddCompany'),
        },
      })
      .afterClosed()
      .subscribe((val) => {
        if (val) {
          this.api.Company.addCompany(val).subscribe(
            () => {
              this.toastr.success(this.translate.instant('Company.CompanAdded'));

              this.pagination.pageNumber = 0;
              this.getCompanies();
            },
            () => {
              this.toastr.error(this.translate.instant('Company.CouldntAddCompany'), this.translate.instant('Common.Error'));
            }
          );
        }
      });
  }

  editCompany(company: CompanyInterface) {
    this.dialog
      .open(AddEditCompanyComponent, {
        data: {
          title: this.translate.instant('Company.EditCompany'),
          ...company,
        },
      })
      .afterClosed()
      .subscribe((val) => {
        if (val) {
          this.api.Company.editCompany(val).subscribe(
            () => {
              this.toastr.success(this.translate.instant('Company.CompanyEdited'));
              this.pagination.pageNumber = 1;
              this.getCompanies();
            },
            () => {
              this.toastr.error(this.translate.instant('Company.CouldntEditCompany'), this.translate.instant('Common.Error'));
            }
          );
        }
      });
  }

  deleteCompany(company: CompanyInterface) {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          text: this.translate.instant('Common.AreYouSureYouWantToDeleteName').replace('{{name}}', company.name),
        },
      })
      .afterClosed()
      .subscribe((val) => {
        if (val) {
          this.api.Company.deleteCompany(company.id).subscribe(() => {
            this.toastr.success(this.translate.instant('Company.CompanyRemoved'));
            this.pagination.pageNumber = 0;
            this.getCompanies();
          });
        }
      });
  }
}

