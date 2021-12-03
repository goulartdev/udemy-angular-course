import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentVComponent } from './assignment-v.component';

describe('AssignmentVComponent', () => {
  let component: AssignmentVComponent;
  let fixture: ComponentFixture<AssignmentVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
