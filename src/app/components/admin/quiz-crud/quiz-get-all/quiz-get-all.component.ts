import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-get-all',
  templateUrl: './quiz-get-all.component.html',
  styleUrl: './quiz-get-all.component.scss'
})
export class QuizGetAllComponent {
  quizzes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllQuizzes();
  }

  getAllQuizzes(): void {
    this.http.get<any[]>('https://edu-api.tohirjon.uz/api/Quiz/GetAllQuizzes')
      .subscribe(
        (data: any[]) => {
          this.quizzes = data;
        },
        (error) => {
          console.error('Error fetching quizzes', error);
        }
      );
  }
}
