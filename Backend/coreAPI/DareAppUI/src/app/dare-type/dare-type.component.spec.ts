import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DareTypeComponent } from './dare-type.component';

describe('DareTypeComponent', () => {
  let component: DareTypeComponent;
  let fixture: ComponentFixture<DareTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DareTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DareTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
