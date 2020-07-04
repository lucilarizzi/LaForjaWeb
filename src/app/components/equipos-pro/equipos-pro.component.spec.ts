import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposProComponent } from './equipos-pro.component';

describe('EquiposProComponent', () => {
  let component: EquiposProComponent;
  let fixture: ComponentFixture<EquiposProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
