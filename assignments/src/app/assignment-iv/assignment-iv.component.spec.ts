import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentIVComponent } from './assignment-iv.component';

describe('AssignmentIvComponent', () => {
  let component: AssignmentIVComponent;
  let fixture: ComponentFixture<AssignmentIVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignmentIVComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
