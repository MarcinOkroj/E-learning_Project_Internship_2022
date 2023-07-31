import { CoursesTabInterface } from './../shared/interface/courses.interface';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.service';
import { TranslateService } from '@ngx-translate/core';

const singleColumn: CoursesTabInterface[] = [];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  pagination = {
    pageNumber: 1,
    pageSize: 10,
    totalElementsCount: 10,
    totalPages: 1,
  };

  displayedColumns: string[] = ['coursename', 'coursestartdate', 'coursefinishdate', 'usersnumber', 'options'];
  dataSource: any;
  filters: any = {};
  course: any;
  courses: any;

  constructor(private dialog: MatDialog,
    private toastr: ToastrService,
    private api: ApiService,
    private route: Router,
    private translate: TranslateService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(singleColumn);
    this.displayedColumns.forEach((val) => {
      this.filters[val] = '';
    });

    this.getCourses();
  }

  applyFilter(event: any, coursename: string) {
    const value = event.target.value;
    this.filters[coursename] = value;
    // this.getCourses()
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortData(sort: Sort) {
    console.log(sort);
  }

  getCourses() {
    this.api.Course.getCourses().subscribe((val: any) => {
      this.dataSource = new MatTableDataSource([...this.dataSource, ...val])
      this.pagination.pageNumber++;
    })
  }

  deleteCourse(course: CoursesTabInterface) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        text: this.translate.instant('Common.AreYouSureYouWantToDeleteName').replace('{{name}}', course.coursename),
      }

    }).afterClosed().subscribe(val => {
      if (val) {
        this.api.Course.deleteCourse(course.id).subscribe(() => {
          this.getCourses();
          this.toastr.success(this.translate.instant('Courses.CourseRemoved'));
        })
      }
    });
  }

  addCourse() {
    this.route.navigateByUrl('app/courses/add-course')
  }

  editCourse(id: number) {
    this.route.navigateByUrl(`app/courses/edit-course/${id}`)
  }
}
