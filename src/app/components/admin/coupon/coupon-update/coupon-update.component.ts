import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coupon-update',
  templateUrl: './coupon-update.component.html',
  styleUrls: ['./coupon-update.component.scss'],
})
export class CouponUpdateComponent implements OnInit {
  newCouponCode: string = '';
  newDiscount: number = 0;
  allCoupons: any[] = [];
  selectedCoupon: any = null;

  constructor(private http: HttpClient) {}

  getAllCoupons(): Observable<any> {
    return this.http.get('https://edu-api.tohirjon.uz/api/Coupon/all');
  }

  ngOnInit(): void {
    this.getAllCoupons().subscribe((res: any) => {
      this.allCoupons = res;
    });
  }

  onCouponSelect(event: any): void {
    // Access the selected coupon from event.target.value
    this.selectedCoupon = event.target.value;
    console.log('Selected coupon:', this.selectedCoupon);
  }
  updateCoupon(): void {
    if (!this.selectedCoupon) {
      console.error('Please select a coupon.');
      return;
    }

    const updatedCoupon = {
      id: this.selectedCoupon.id,
      newCouponCode: this.newCouponCode,
      newDiscount: this.newDiscount
    };
  
    this.http.put('https://edu-api.tohirjon.uz/api/Coupon/update', updatedCoupon).subscribe(res => {
      console.log('Coupon updated successfully:', res);
      // Reset form fields after successful update
      this.newCouponCode = '';
      this.newDiscount = 0;
      this.selectedCoupon = null;
    }, error => {
      console.error('Error updating coupon:', error);
    });
  }
}
