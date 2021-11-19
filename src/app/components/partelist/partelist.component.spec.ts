import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartelistComponent } from './partelist.component';

describe('PartelistComponent', () => {
  let component: PartelistComponent;
  let fixture: ComponentFixture<PartelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
