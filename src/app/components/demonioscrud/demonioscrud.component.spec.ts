import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonioscrudComponent } from './demonioscrud.component';

describe('DemonioscrudComponent', () => {
  let component: DemonioscrudComponent;
  let fixture: ComponentFixture<DemonioscrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonioscrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonioscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
