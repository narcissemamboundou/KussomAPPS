import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjetProComponent } from './dialog-projet-pro.component';

describe('DialogProjetProComponent', () => {
  let component: DialogProjetProComponent;
  let fixture: ComponentFixture<DialogProjetProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjetProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjetProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
