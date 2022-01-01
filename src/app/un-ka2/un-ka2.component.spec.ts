import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnKa2Component } from './un-ka2.component';

describe('UnKa2Component', () => {
  let component: UnKa2Component;
  let fixture: ComponentFixture<UnKa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnKa2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnKa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
