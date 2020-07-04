import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoxidablesComponent } from './inoxidables.component';

describe('InoxidablesComponent', () => {
  let component: InoxidablesComponent;
  let fixture: ComponentFixture<InoxidablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoxidablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoxidablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
