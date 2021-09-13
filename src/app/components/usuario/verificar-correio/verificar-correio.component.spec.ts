import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarCorreioComponent } from './verificar-correio.component';

describe('VerificarCorreioComponent', () => {
  let component: VerificarCorreioComponent;
  let fixture: ComponentFixture<VerificarCorreioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarCorreioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarCorreioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
