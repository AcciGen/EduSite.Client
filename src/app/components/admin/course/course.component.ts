import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent  {

  currentComponent: string = 'course-create';

  showCreateComponent() {
    this.currentComponent = 'course-create';
  }

  showUpdateComponent() {
    this.currentComponent = 'course-update';
  }

  showGetAllComponent() {
    this.currentComponent = 'course-get-all';
  }

  showDeleteComponent() {
    this.currentComponent = 'course-delete';
  }


  // ngOnInit(): void {
  //   this.UserService.getAllUsers().subscribe((res) => {
  //     console.log(res);
  //     this.topStudents = res;

  //     this.user = res.find(
  //       (user: any) => user.id === localStorage.getItem('userId')
  //     );

  //     // Number("23")

  //     localStorage.setItem('user', JSON.stringify(this.user));

  //     console.log(this.user.photoPath);
  //   });
  // }
}
