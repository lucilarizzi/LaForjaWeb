import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarCursoComponent } from './reservar-curso.component';

describe('ReservarCursoComponent', () => {
  let component: ReservarCursoComponent;
  let fixture: ComponentFixture<ReservarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
