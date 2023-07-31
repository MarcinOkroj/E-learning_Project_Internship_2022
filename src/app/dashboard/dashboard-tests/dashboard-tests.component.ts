import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectInterface } from 'src/app/shared/interface/select.interface';
import { TileInterface } from 'src/app/shared/interface/tiles.interface';

@Component({
  selector: 'app-dashboard-tests',
  templateUrl: './dashboard-tests.component.html',
  styleUrls: ['./dashboard-tests.component.scss']
})
export class DashboardTestsComponent implements OnInit {
  tileWidth: number = 290; //width in px
  tilesFit: number = 0;
  columnsDisplay!: number;
  fliterValue!: string;
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

  testsSource: TileInterface[] = [
    { id: 1, name: 'Test o nazwie tak długiej, że nie zmieści się w żadnym divie', date: '15.12.2023', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Test 2', date: '24.04.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Test 3', date: '08.06.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/36/circle-2696910_960_720.jpg" },
    { id: 1, name: 'Test 4', date: '19.10.2024', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
    { id: 1, name: 'Test 1', date: '15.12.2023', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Test 2', date: '24.04.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Test 3', date: '08.06.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/36/circle-2696910_960_720.jpg" },
    { id: 1, name: 'Test 4', date: '19.10.2024', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
    { id: 1, name: 'Test 1', date: '15.12.2023', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Test 2', date: '24.04.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Test 3', date: '08.06.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/36/circle-2696910_960_720.jpg" },
    { id: 1, name: 'Test 4', date: '19.10.2024', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
    { id: 1, name: 'Test 1', date: '15.12.2023', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Test 2', date: '24.04.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Test 3', date: '08.06.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/36/circle-2696910_960_720.jpg" },
    { id: 1, name: 'Test 4', date: '19.10.2024', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
    { id: 1, name: 'Test 1', date: '15.12.2023', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Test 2', date: '24.04.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Test 3', date: '08.06.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/36/circle-2696910_960_720.jpg" },
    { id: 1, name: 'Test 4', date: '19.10.2024', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
    { id: 1, name: 'Test 1', date: '15.12.2023', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Test 2', date: '24.04.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Test 3', date: '08.06.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/36/circle-2696910_960_720.jpg" },
    { id: 1, name: 'Test 4', date: '19.10.2024', status: "Start", backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
  ];

  constructor() { }

  ngOnInit(): void {
    this.tilesInColumn();
  }

  tilesInColumn() {
    this.columnsDisplay = Math.floor((window.innerWidth - 185) / this.tileWidth);
  }

  onSort(sort: any) {
  }

  onFilter(event: any) {
    this.fliterValue = event.target.value;
  }
}
