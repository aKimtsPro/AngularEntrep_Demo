import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServEnfantBComponent } from './serv-enfant-b.component';

describe('ServEnfantBComponent', () => {
  let component: ServEnfantBComponent;
  let fixture: ComponentFixture<ServEnfantBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServEnfantBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServEnfantBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
