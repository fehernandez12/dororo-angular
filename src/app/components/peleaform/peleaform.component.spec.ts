import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeleaformComponent } from './peleaform.component';

describe('PeleaformComponent', () => {
  let component: PeleaformComponent;
  let fixture: ComponentFixture<PeleaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeleaformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeleaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
