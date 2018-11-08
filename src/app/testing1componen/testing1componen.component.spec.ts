import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testing1componenComponent } from './testing1componen.component';

describe('Testing1componenComponent', () => {
  let component: Testing1componenComponent;
  let fixture: ComponentFixture<Testing1componenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testing1componenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testing1componenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
