import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentVIComponent } from './assignment-vi.component';

describe('AssignmentViComponent', () => {
  let component: AssignmentVIComponent;
  let fixture: ComponentFixture<AssignmentVIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentVIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentVIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
