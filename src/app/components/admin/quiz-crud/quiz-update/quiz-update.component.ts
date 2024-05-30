import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-update',
  templateUrl: './quiz-update.component.html',
  styleUrls: ['./quiz-update.component.scss']
})
export class QuizUpdateComponent implements OnInit {
  quizTitle: string = '';
  selectedCourseId: string | null = null;
  selectedQuizId: string | null = null;
  courses: any[] = [];
  quizzes: any[] = [];
  private baseUrl = 'https://edu-api.tohirjon.uz/api';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCourses().subscribe((data: any) => {
      this.courses = data;
    });
    this.getAllQuizzes();
  }

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Course/GetAllCourses`);
  }

  getAllQuizzes(): void {
    this.http.get<any[]>(`${this.baseUrl}/Quiz/GetAllQuizzes`)
      .subscribe(
        (data: any[]) => {
          this.quizzes = data;
        },
        (error) => {
          console.error('Error fetching quizzes', error);
        }
      );
  }

  updateQuiz(): void {
    if (!this.quizTitle || !this.selectedCourseId || !this.selectedQuizId) {
      console.error('Please fill in all fields');
      return;
    }

    const quizData = {
      id: this.selectedQuizId,
      title: this.quizTitle,
      courseId: this.selectedCourseId
    };

    this.http.put(`${this.baseUrl}/Quiz/UpdateQuiz`, quizData)
      .subscribe(
        (response) => {
          console.log('Quiz updated successfully', response);
          // Optionally, you can navigate to another page or reset the form
          this.resetForm();
        },
        (error) => {
          console.error('Error updating quiz', error);
        }
      );
  }

  resetForm(): void {
    this.quizTitle = '';
    this.selectedCourseId = null;
    this.selectedQuizId = null;
  }
}
