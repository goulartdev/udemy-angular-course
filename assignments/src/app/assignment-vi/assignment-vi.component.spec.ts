import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentViComponent } from './assignment-vi.component';

describe('AssignmentViComponent', () => {
  let component: AssignmentViComponent;
  let fixture: ComponentFixture<AssignmentViComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentViComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentViComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
