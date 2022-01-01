import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentVIIComponent } from './assignment-vii.component';

describe('AssignmentViComponent', () => {
  let component: AssignmentVIIComponent;
  let fixture: ComponentFixture<AssignmentVIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentVIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentVIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
