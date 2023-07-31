import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSidebarNavComponent } from './menu-sidebar-nav.component';

describe('MenuSidebarNavComponent', () => {
  let component: MenuSidebarNavComponent;
  let fixture: ComponentFixture<MenuSidebarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSidebarNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
