import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeCardCalendarComponent } from './three-card-calendar.component';

describe('ThreeCardCalendarComponent', () => {
  let component: ThreeCardCalendarComponent;
  let fixture: ComponentFixture<ThreeCardCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeCardCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeCardCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
