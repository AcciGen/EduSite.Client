import { Component } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-lesson-delete',
  templateUrl: './lesson-delete.component.html',
  styleUrl: './lesson-delete.component.scss'
})
export class LessonDeleteComponent {
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
