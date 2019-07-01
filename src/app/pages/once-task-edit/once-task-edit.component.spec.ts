import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnceTaskEditComponent } from './once-task-edit.component';

describe('OnceTaskEditComponent', () => {
  let component: OnceTaskEditComponent;
  let fixture: ComponentFixture<OnceTaskEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnceTaskEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnceTaskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
