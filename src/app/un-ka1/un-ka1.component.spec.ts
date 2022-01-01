import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnKa1Component } from './un-ka1.component';

describe('UnKa1Component', () => {
  let component: UnKa1Component;
  let fixture: ComponentFixture<UnKa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnKa1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnKa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
