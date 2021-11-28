import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorySheetComponent } from './add-category-sheet.component';

describe('AddCategorySheetComponent', () => {
  let component: AddCategorySheetComponent;
  let fixture: ComponentFixture<AddCategorySheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorySheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategorySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
