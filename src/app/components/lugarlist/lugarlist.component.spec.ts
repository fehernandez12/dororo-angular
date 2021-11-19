import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarlistComponent } from './lugarlist.component';

describe('LugarlistComponent', () => {
  let component: LugarlistComponent;
  let fixture: ComponentFixture<LugarlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LugarlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
