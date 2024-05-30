import { Component } from '@angular/core';
import { CrudService } from '../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrl: './course-delete.component.scss'
})
export class CourseDeleteComponent {
  Id: string = ''
  constructor(private crudService: CrudService) { }

  submit() {
     // implement the delete logic here   
  }
}
