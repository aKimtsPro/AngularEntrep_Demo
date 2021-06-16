import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServEnfantAComponent } from './serv-enfant-a.component';

describe('ServEnfantAComponent', () => {
  let component: ServEnfantAComponent;
  let fixture: ComponentFixture<ServEnfantAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServEnfantAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServEnfantAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
