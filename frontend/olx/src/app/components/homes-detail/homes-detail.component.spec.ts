import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesDetailComponent } from './homes-detail.component';

describe('HomesDetailComponent', () => {
  let component: HomesDetailComponent;
  let fixture: ComponentFixture<HomesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesDetailComponent]
    });
    fixture = TestBed.createComponent(HomesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
