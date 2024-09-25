import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConvertidorNumericoPage } from './convertidor-numerico.page';

describe('ConvertidorNumericoPage', () => {
  let component: ConvertidorNumericoPage;
  let fixture: ComponentFixture<ConvertidorNumericoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertidorNumericoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
