import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-delete',
  templateUrl: './quiz-delete.component.html',
  styleUrl: './quiz-delete.component.scss'
})
export class QuizDeleteComponent {
  quizzes: any[] = [];
  selectedQuizId: string | null = null;

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

  deleteQuiz(): void {
    if (!this.selectedQuizId) {
      console.error('No quiz selected');
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: this.selectedQuizId
      }
    };

    this.http.delete('https://edu-api.tohirjon.uz/api/Quiz/DeleteQuiz', httpOptions)
      .subscribe(
        (response) => {
          console.log('Quiz deleted successfully', response);
          // Optionally, you can remove the deleted quiz from the local array to reflect changes immediately
          this.quizzes = this.quizzes.filter(quiz => quiz.id !== this.selectedQuizId);
          // Reset selectedQuizId after deletion
          this.selectedQuizId = null;
        },
        (error) => {
          console.error('Error deleting quiz', error);
        }
      );
  }
}
