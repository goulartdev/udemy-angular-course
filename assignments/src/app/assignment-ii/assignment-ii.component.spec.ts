import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentIIComponent } from './assignment-ii.component';

describe('AssignmentIiComponent', () => {
  let component: AssignmentIIComponent;
  let fixture: ComponentFixture<AssignmentIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentIIComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
