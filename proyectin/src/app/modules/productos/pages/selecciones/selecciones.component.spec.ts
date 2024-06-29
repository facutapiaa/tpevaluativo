import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionesComponent } from './selecciones.component';

describe('SeleccionesComponent', () => {
  let component: SeleccionesComponent;
  let fixture: ComponentFixture<SeleccionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionesComponent]
    });
    fixture = TestBed.createComponent(SeleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
