import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminioComponent } from './aluminio.component';

describe('AluminioComponent', () => {
  let component: AluminioComponent;
  let fixture: ComponentFixture<AluminioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluminioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluminioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
