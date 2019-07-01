import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingTaskEditComponent } from './timing-task-edit.component';

describe('TimingTaskEditComponent', () => {
  let component: TimingTaskEditComponent;
  let fixture: ComponentFixture<TimingTaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingTaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
