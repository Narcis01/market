import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentFormComponent } from './apartment-form.component';

describe('ApartmentFormComponent', () => {
  let component: ApartmentFormComponent;
  let fixture: ComponentFixture<ApartmentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentFormComponent]
    });
    fixture = TestBed.createComponent(ApartmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
