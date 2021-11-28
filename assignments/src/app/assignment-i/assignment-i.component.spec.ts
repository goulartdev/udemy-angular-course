import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentIComponent } from './assignment-i.component';

describe('AssignmentIComponent', () => {
  let component: AssignmentIComponent;
  let fixture: ComponentFixture<AssignmentIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
