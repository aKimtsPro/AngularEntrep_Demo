import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantAComponent } from './enfant-a.component';

describe('EnfantAComponent', () => {
  let component: EnfantAComponent;
  let fixture: ComponentFixture<EnfantAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
