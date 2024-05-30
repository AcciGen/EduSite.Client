import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponGetAllComponent } from './coupon-get-all.component';

describe('CouponGetAllComponent', () => {
  let component: CouponGetAllComponent;
  let fixture: ComponentFixture<CouponGetAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponGetAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponGetAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
