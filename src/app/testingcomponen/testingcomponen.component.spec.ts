import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingcomponenComponent } from './testingcomponen.component';

describe('TestingcomponenComponent', () => {
  let component: TestingcomponenComponent;
  let fixture: ComponentFixture<TestingcomponenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingcomponenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingcomponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
