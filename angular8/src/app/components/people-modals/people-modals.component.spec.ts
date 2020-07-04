import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleModalsComponent } from './people-modals.component';

describe('PeopleModalsComponent', () => {
  let component: PeopleModalsComponent;
  let fixture: ComponentFixture<PeopleModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
