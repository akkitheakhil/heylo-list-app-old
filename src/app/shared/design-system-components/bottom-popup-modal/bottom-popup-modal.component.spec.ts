import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomPopupModalComponent } from './bottom-popup-modal.component';

describe('BottomPopupModalComponent', () => {
  let component: BottomPopupModalComponent;
  let fixture: ComponentFixture<BottomPopupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomPopupModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
