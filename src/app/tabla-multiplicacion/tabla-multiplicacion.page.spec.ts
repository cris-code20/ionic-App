import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicacionPage } from './tabla-multiplicacion.page';

describe('TablaMultiplicacionPage', () => {
  let component: TablaMultiplicacionPage;
  let fixture: ComponentFixture<TablaMultiplicacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMultiplicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
