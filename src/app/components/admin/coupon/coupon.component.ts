import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { UserService } from '../../../services/CRUDs/user.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.scss'
})
export class CouponComponent {

  name = '';
  topStudents: any;
  user: any;
  constructor(
    private crudService: CrudService,
    private UserService: UserService
  ) {}


  currentComponent: string = 'coupon-create';

  showCreateComponent() {
    this.currentComponent = 'coupon-create';
  }

  showUpdateComponent() {
    this.currentComponent = 'coupon-update';
  }

  showGetAllComponent() {
    this.currentComponent = 'coupon-get-all';
  }

  showDeleteComponent() {
    this.currentComponent = 'coupon-delete';
  }



 
}
