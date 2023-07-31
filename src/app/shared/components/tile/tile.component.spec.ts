import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesComponent } from './tile.component';

describe('TilesComponent', () => {
  let component: TilesComponent;
  let fixture: ComponentFixture<TilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
