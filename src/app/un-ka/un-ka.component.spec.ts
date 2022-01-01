import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnKaComponent } from './un-ka.component';

describe('UnKaComponent', () => {
  let component: UnKaComponent;
  let fixture: ComponentFixture<UnKaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnKaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnKaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
