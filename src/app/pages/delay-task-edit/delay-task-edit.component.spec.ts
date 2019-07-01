import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayTaskEditComponent } from './delay-task-edit.component';

describe('DelayTaskEditComponent', () => {
  let component: DelayTaskEditComponent;
  let fixture: ComponentFixture<DelayTaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayTaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
