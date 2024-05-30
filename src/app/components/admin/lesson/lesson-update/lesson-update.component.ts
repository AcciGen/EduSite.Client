import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

interface Course {
  id: string;
  courseName: string;
  description: string;
  totalTime: number;
  price: number;
  teacherName: string;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  expForWatching: number;
}

@Component({
  selector: 'app-lesson-update',
  templateUrl: './lesson-update.component.html',
  styleUrls: ['./lesson-update.component.scss']
})
export class LessonUpdateComponent implements OnInit {
  updateForm: FormGroup;
  lessons: Lesson[] = [];
  selectedFile: File | null = null;
  private apiUrl = 'https://edu-api.tohirjon.uz/api';
  courses: Course[] = [];
  selectedCourseId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    this.updateForm = this.fb.group({
      courseId: ['', Validators.required], // Fix control name
      lessonId: [''], // Add lessonId control
      title: ['', Validators.required],
      expForWatching: ['', [Validators.required, Validators.min(0)]],
      videoFile: [null]
    });
  }

  ngOnInit(): void {
    this.getCourses().subscribe((res: Course[]) => {
      this.courses = res;
    });
  }

  onCourseSelect(event: MatSelectChange): void {
    const selectedValue = event.value;
    this.selectedCourseId = selectedValue;
    if (this.selectedCourseId) {
      this.getLessonsByCourseId(this.selectedCourseId).subscribe((res: Lesson[]) => {
        this.lessons = res;
        this.updateForm.get('lessonId')?.reset(); // Reset selected lesson
      });
    }
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      const formData = new FormData();
      formData.append('id', this.updateForm.get('lessonId')?.value); // Fix control name
      formData.append('title', this.updateForm.get('title')?.value);
      formData.append('expForWatching', this.updateForm.get('expForWatching')?.value);
      if (this.selectedFile) {
        formData.append('videoFile', this.selectedFile);
      }

      // Assuming lessonService is already defined and injected
      this.updateLesson(formData).subscribe(
        response => {
          this.snackBar.open('Lesson updated successfully!', 'Close', { duration: 3000 });
        },
        error => {
          this.snackBar.open('Error updating lesson', 'Close', { duration: 3000 });
        }
      );
    }
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/Course/GetCourses`);
  }

  getLessonsByCourseId(courseId: string): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`${this.apiUrl}/Lesson/GetLessonsByCourseId/${courseId}`);
  }

  updateLesson(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Lesson/UpdateLesson`, formData);
  }
}
