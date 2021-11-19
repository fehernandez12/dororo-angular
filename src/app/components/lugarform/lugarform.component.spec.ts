import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarformComponent } from './lugarform.component';

describe('LugarformComponent', () => {
  let component: LugarformComponent;
  let fixture: ComponentFixture<LugarformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
