import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectInterface } from 'src/app/shared/interface/select.interface';
import { TileInterface } from 'src/app/shared/interface/tiles.interface';

@Component({
  selector: 'dashboard-user-courses',
  templateUrl: './dashboard-courses.component.html',
  styleUrls: ['./dashboard-courses.component.scss']
})
export class DashboardCoursesComponent implements OnInit {
  tileWidth: number = 290; //width in px
  tilesFit: number = 0;
  columnsDisplay!: number;
  filterValue!: string;
  rowHeight: number = 350;
  gutterSize: number = 30;

  sortArr: SelectInterface[] = [{
    id: 'sortAsc',
    text: 'Dashboard.sortAZ'
  }, {
    id: 'sortDesc',
    text: 'Dashboard.sortZA'
  }, {
    id: 'sortDateAsc',
    text: 'Dashboard.EndingFirst'
  }, {
    id: 'sortDateDesc',
    text: 'Dashboard.EndingLast'
  }];
  sortFormControl = new FormControl(this.sortArr[0].id);

  coursesSource: TileInterface[] = [
    { id: 1, name: 'Jak zrobić interceptor', date: '15.12.2023', progress: '0', status: "Start", canUserLeave: true, backgroundImg: "https://media-exp1.licdn.com/dms/image/C5603AQHnPwh76eN7Cg/profile-displayphoto-shrink_200_200/0/1639246072635?e=2147483647&v=beta&t=xgQhHKML7D-gzS_rUU352pV5PjOxtz1sscUL73lilcg" },
    { id: 2, name: 'Kurs o nazwie tak długiej, że nie zmieści się w żadnym divie', date: '24.04.2022', progress: '20', status: "Continue", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 3, name: 'Kurs 3', date: '08.06.2022', progress: '100', status: "View again", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Kurs 4', date: '19.10.2024', progress: '80', status: "Continue", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/23/green-2696878_960_720.jpg" },
    { id: 1, name: 'Kurs 5', date: '15.12.2023', progress: '0', status: "Start", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
    { id: 1, name: 'Kurs 6', date: '29.01.2022', progress: '20', status: "Continue", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/07/07/22/47/vector-2483061_960_720.png" },
    { id: 1, name: 'Kurs 7', date: '09.04.2023', progress: '100', status: "View again", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Kurs 8', date: '11.12.2022', progress: '80', status: "Continue", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/seamless-2721472_960_720.jpg" },
    { id: 1, name: 'Kurs 9', date: '11.12.2022', progress: '80', status: "Continue", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/dot-2721463_960_720.jpg" },
    { id: 1, name: 'Kurs 10', date: '11.12.2022', progress: '80', status: "Continue", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2015/12/19/10/36/fabric-1099626_960_720.jpg" },
    { id: 1, name: 'Kurs 11', date: '11.12.2022', progress: '80', status: "Continue", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
  ];

  constructor() { }

  ngOnInit(): void {
    this.tilesInColumn();
  }

  tilesInColumn() {
    this.columnsDisplay = Math.floor((window.innerWidth - 185) / this.tileWidth);
  }

  onSort(sort: any) {
    //sort.value
  }

  onFilter(event: any) {
    this.filterValue = event.target.value;
  }
}
