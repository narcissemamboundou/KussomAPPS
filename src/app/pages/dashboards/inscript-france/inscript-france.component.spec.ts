import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptFranceComponent } from './inscript-france.component';

describe('InscriptFranceComponent', () => {
  let component: InscriptFranceComponent;
  let fixture: ComponentFixture<InscriptFranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptFranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
