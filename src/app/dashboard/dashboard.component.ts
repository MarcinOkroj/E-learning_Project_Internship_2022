import { Component, Input, OnInit } from '@angular/core';
import { TileInterface } from '../shared/interface/tiles.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() scrollEvent: any; // decorate the property with @Input()
  tileWidth: number = 290; //width in px
  tilesFit: number = 0;
  viewMoreCourses: boolean = false;
  viewMoreTests: boolean = false;
  coursesDisplayed!: TileInterface[];
  testsDisplayed!: TileInterface[];

  coursesSource: TileInterface[] = [
    { id: 1, name: 'Kurs 1', date: '15.12.2023', progress: '0', status: "Start", canUserLeave: true, backgroundImg: "https://pixabay.com/get/g91aa8ec4e7f0696881a523983828874b3fad1e1f211ffde884cdb3302d9e977ecfcea25291c8157753be476c40b497164e58521b3fcf81ba412c414d297816dd6fa4daed9732ad88f2cc672b9012b8f3_1280.png" },
    { id: 1, name: 'Kurs 2', date: '24.04.2022', progress: '20', status: "Continue", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Kurs 3', date: '08.06.2022', progress: '100', status: "View again", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Kurs 4', date: '19.10.2024', progress: '80', status: "Continue", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/23/green-2696878_960_720.jpg" },
    { id: 1, name: 'Kurs 5', date: '15.12.2023', progress: '0', status: "Start", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2017/10/06/11/18/pastel-2822762_960_720.jpg" },
    { id: 1, name: 'Kurs 6', date: '29.01.2022', progress: '20', status: "Continue", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/07/07/22/47/vector-2483061_960_720.png" },
    { id: 1, name: 'Kurs 7', date: '09.04.2023', progress: '100', status: "View again", canUserLeave: true, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/04/22/22/yellow-2715734_960_720.jpg" },
    { id: 1, name: 'Kurs 8', date: '11.12.2022', progress: '80', status: "Continue", canUserLeave: false, backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
  ]

  testsSource: TileInterface[] = [
    { id: 1, name: 'Test 1', date: '15.12.2023', status: "Start", backgroundImg: "https://pixabay.com/get/g91aa8ec4e7f0696881a523983828874b3fad1e1f211ffde884cdb3302d9e977ecfcea25291c8157753be476c40b497164e58521b3fcf81ba412c414d297816dd6fa4daed9732ad88f2cc672b9012b8f3_1280.png" },
    { id: 1, name: 'Test 2', date: '24.04.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/09/06/13/29/blue-2721464_960_720.jpg" },
    { id: 1, name: 'Test 3', date: '08.06.2022', status: "View again", backgroundImg: "https://cdn.pixabay.com/photo/2017/08/30/12/36/circle-2696910_960_720.jpg" },
    { id: 1, name: 'Test 4', date: '19.10.2024', status: "Start", backgroundImg: "https://pixabay.com/get/g91aa8ec4e7f0696881a523983828874b3fad1e1f211ffde884cdb3302d9e977ecfcea25291c8157753be476c40b497164e58521b3fcf81ba412c414d297816dd6fa4daed9732ad88f2cc672b9012b8f3_1280.png" },

  ]
  constructor() { }

  ngOnInit(): void {
    this.tilesOnScreen();
  }

  tilesOnScreen() {
    this.tilesFit = Math.floor((window.innerWidth - 205) / this.tileWidth);

    this.coursesDisplayed = this.coursesSource.slice(0, this.tilesFit)
    this.testsDisplayed = this.testsSource.slice(0, this.tilesFit)

    if (this.coursesSource.length > this.tilesFit)
      this.viewMoreCourses = true
    else
      this.viewMoreCourses = false

    if (this.testsSource.length > this.tilesFit)
      this.viewMoreTests = true
    else
      this.viewMoreTests = false
  }
}
