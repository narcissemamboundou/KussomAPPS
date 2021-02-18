import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjetFormComponent } from './dialog-projet-form.component';

describe('DialogProjetFormComponent', () => {
  let component: DialogProjetFormComponent;
  let fixture: ComponentFixture<DialogProjetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
