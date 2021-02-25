import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShoolComponent } from './new-shool.component';

describe('NewShoolComponent', () => {
  let component: NewShoolComponent;
  let fixture: ComponentFixture<NewShoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
