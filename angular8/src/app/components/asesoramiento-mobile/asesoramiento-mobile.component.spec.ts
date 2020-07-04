import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoramientoMobileComponent } from './asesoramiento-mobile.component';

describe('AsesoramientoMobileComponent', () => {
  let component: AsesoramientoMobileComponent;
  let fixture: ComponentFixture<AsesoramientoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesoramientoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoramientoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
