import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { LessonModel } from '../../../models/lesson-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {

  currentComponent: string = 'lesson-create';

  showCreateComponent() {
    this.currentComponent = 'lesson-create';
  }

  showUpdateComponent() {
    this.currentComponent = 'lesson-update';
  }

  showGetAllComponent() {
    this.currentComponent = 'lesson-get-all';
  }

  showDeleteComponent() {
    this.currentComponent = 'lesson-delete';
  }
  // onSubmit() {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('photo', this.selectedFile);

  //     // Send the photo to the server
  //     this.http
  //       .post<any>(
  //         'https://edu-api.tohirjon.uz/api/Lesson/CreateLesson',
  //         formData
  //       )
  //       .subscribe(
  //         (response) => {
  //           console.log('Photo uploaded successfully!', response);
  //         },
  //         (error) => {
  //           console.error('Error uploading photo:', error);
  //         }
  //       );
  //   }
  // }
}
