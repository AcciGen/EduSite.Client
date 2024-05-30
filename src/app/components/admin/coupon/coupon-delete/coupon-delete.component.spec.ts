import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponDeleteComponent } from './coupon-delete.component';

describe('CouponDeleteComponent', () => {
  let component: CouponDeleteComponent;
  let fixture: ComponentFixture<CouponDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CouponDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CouponDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
