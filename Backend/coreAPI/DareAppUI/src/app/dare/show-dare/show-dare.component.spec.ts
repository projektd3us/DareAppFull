import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDareComponent } from './show-dare.component';

describe('ShowDareComponent', () => {
  let component: ShowDareComponent;
  let fixture: ComponentFixture<ShowDareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
