import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonioslistComponent } from './demonioslist.component';

describe('DemonioslistComponent', () => {
  let component: DemonioslistComponent;
  let fixture: ComponentFixture<DemonioslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonioslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonioslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
