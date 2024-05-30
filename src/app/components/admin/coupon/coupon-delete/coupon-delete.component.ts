import { Component } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-coupon-delete',
  templateUrl: './coupon-delete.component.html',
  styleUrl: './coupon-delete.component.scss'
})
export class CouponDeleteComponent {

  Id: string = ''
  constructor(private crudService: CrudService) { }

  submit() {
    this.crudService.deleteCoupon(this.Id).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
