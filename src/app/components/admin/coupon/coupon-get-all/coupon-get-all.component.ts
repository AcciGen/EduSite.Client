import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coupon-get-all',
  templateUrl: './coupon-get-all.component.html',
  styleUrl: './coupon-get-all.component.scss'
})
export class CouponGetAllComponent implements OnInit {

  allCoupons: any;
    constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('https://edu-api.tohirjon.uz/api/Coupon/all').subscribe(res => {
      this.allCoupons = res
      console.log(this.allCoupons)
    })
  }

}
