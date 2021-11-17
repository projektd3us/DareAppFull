import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDareTypeComponent } from './add-edit-dare-type.component';

describe('AddEditDareTypeComponent', () => {
  let component: AddEditDareTypeComponent;
  let fixture: ComponentFixture<AddEditDareTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDareTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDareTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
