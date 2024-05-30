import { Component } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-course-get-all',
  templateUrl: './course-get-all.component.html',
  styleUrl: './course-get-all.component.scss'
})
export class CourseGetAllComponent {
  allCoupons: any;
  constructor(private crudService: CrudService) { }
  ngOnInit(): void {
    this.crudService.GetAllCoupons().subscribe(res => {
      this.allCoupons = res
      
    })

    console.log(this.allCoupons)
  }
}
