import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDareTypeComponent } from './show-dare-type.component';

describe('ShowDareTypeComponent', () => {
  let component: ShowDareTypeComponent;
  let fixture: ComponentFixture<ShowDareTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDareTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDareTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
