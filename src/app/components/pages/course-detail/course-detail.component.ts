import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {
  toggleCourseContent: string = "";

  toggle(){
    this.toggleCourseContent = this.toggleCourseContent === '' ? 'd-none' : '';
  }

  course!:any

  constructor(private crudService:CrudService){
    let id:string= localStorage.getItem("courseId")!
    crudService.getCourseById(id).subscribe({
      next:(data)=>{
        this.course=data
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  formatTotalTime(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes.toFixed(0)}m`;
  }

}
