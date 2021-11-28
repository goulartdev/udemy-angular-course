import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentIIIComponent } from './assignment-iii.component';

describe('AssignmentIiiComponent', () => {
  let component: AssignmentIIIComponent;
  let fixture: ComponentFixture<AssignmentIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentIIIComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
