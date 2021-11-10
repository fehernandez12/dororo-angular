import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonioformComponent } from './demonioform.component';

describe('DemonioformComponent', () => {
  let component: DemonioformComponent;
  let fixture: ComponentFixture<DemonioformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonioformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonioformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
