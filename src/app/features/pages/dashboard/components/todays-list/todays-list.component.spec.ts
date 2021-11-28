import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysListComponent } from './todays-list.component';

describe('TodaysListComponent', () => {
  let component: TodaysListComponent;
  let fixture: ComponentFixture<TodaysListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
