import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrl: './quiz-create.component.scss'
})
export class QuizCreateComponent {
  quizTitle: string = '';
  selectedCourseId: string | null = null;
  courses: any[] = [];
  private baseUrl = 'https://edu-api.tohirjon.uz/api';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Course/GetAllCourses`);
  }

 
  createQuiz(): void {
    if (!this.quizTitle || !this.selectedCourseId) {
      console.error('Please fill in all fields');
      return;
    }

    const quizData = {
      title: this.quizTitle,
      courseId: this.selectedCourseId
    };

    this.http.post('https://edu-api.tohirjon.uz/api/Quiz/CreateQuiz', quizData)
      .subscribe(
        (response) => {
          console.log('Quiz created successfully', response);
          // Optionally, you can navigate to another page or reset the form
          this.resetForm();
        },
        (error) => {
          console.error('Error creating quiz', error);
        }
      );
  }
  resetForm(): void {
    this.quizTitle = '';
    this.selectedCourseId = '';
  }
}
