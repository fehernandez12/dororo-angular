import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelealistComponent } from './pelealist.component';

describe('PelealistComponent', () => {
  let component: PelealistComponent;
  let fixture: ComponentFixture<PelealistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelealistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelealistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
