import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantBComponent } from './enfant-b.component';

describe('EnfantBComponent', () => {
  let component: EnfantBComponent;
  let fixture: ComponentFixture<EnfantBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
