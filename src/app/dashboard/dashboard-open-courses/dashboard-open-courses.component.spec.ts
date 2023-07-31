import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOpenCoursesComponent } from './dashboard-open-courses.component';

describe('DashboardOpenCoursesComponent', () => {
  let component: DashboardOpenCoursesComponent;
  let fixture: ComponentFixture<DashboardOpenCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOpenCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOpenCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
