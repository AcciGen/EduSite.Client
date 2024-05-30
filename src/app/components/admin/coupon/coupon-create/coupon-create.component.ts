import { Component } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrl: './coupon-create.component.scss'
})
export class CouponCreateComponent {
    couponCode = '';
    discount = 0;
  constructor(private crudService: CrudService) {
    
  }
  submit() {
    // Add your submit logic here
   this.crudService.CreateCoupon(this.couponCode, this.discount).subscribe(res => {
       try{
         if(res.isSuccess){
           alert('Succesful')
         }
         else{
           alert('Unsuccesful')
         }
         console.log(res)
       }
       catch(error){
         console.log(error);
         alert('error');
       }
   })
   this.couponCode = '';
   this.discount = 0;
  }
}
