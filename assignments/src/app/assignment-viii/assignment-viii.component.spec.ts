import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentVIIIComponent } from './assignment-viii.component';

describe('AssignmentViiiComponent', () => {
  let component: AssignmentVIIIComponent;
  let fixture: ComponentFixture<AssignmentVIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentVIIIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentVIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
