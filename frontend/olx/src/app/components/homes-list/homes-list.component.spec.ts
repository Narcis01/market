import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesListComponent } from './homes-list.component';

describe('HomesListComponent', () => {
  let component: HomesListComponent;
  let fixture: ComponentFixture<HomesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesListComponent]
    });
    fixture = TestBed.createComponent(HomesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
