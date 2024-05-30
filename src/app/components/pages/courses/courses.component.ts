import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent  {
  allCourses!: any;
  constructor(private crudService: CrudService) {
    this.crudService.GetAllCourses().subscribe({
      next: (data) => {
        this.allCourses = data;
      },
      error: (err) => {
        console.log(err);
      },
    });

    setTimeout(() => {
      this.con()
    }, 1000);
  }

  setId(id:string|any){
    localStorage.setItem("courseId",id)
  }

  
  formatTotalTime(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes.toFixed(0)}m`;
  }
  con() {
    console.log(this.allCourses)
  }
}



