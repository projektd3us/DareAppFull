import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDareComponent } from './add-edit-dare.component';

describe('AddEditDareComponent', () => {
  let component: AddEditDareComponent;
  let fixture: ComponentFixture<AddEditDareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
