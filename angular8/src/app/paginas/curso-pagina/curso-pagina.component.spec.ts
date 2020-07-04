import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPaginaComponent } from './curso-pagina.component';

describe('CursoPaginaComponent', () => {
  let component: CursoPaginaComponent;
  let fixture: ComponentFixture<CursoPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
