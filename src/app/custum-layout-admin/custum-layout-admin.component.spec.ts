import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumLayoutAdminComponent } from './custum-layout-admin.component';

describe('CustumLayoutAdminComponent', () => {
  let component: CustumLayoutAdminComponent;
  let fixture: ComponentFixture<CustumLayoutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumLayoutAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumLayoutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
