import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteformComponent } from './parteform.component';

describe('ParteformComponent', () => {
  let component: ParteformComponent;
  let fixture: ComponentFixture<ParteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
