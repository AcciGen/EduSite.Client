import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-question-get-all',
  templateUrl: './question-get-all.component.html',
  styleUrl: './question-get-all.component.scss'
})
export class QuestionGetAllComponent {
  questions: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchQuestions() {
    this.http.get<any[]>('https://edu-api.tohirjon.uz/api/Question/GetAllQuestions')
      .subscribe(
        (response) => {
          this.questions = response;
        },
        (error) => {
          console.error('Error fetching questions:', error);
        }
      );
  }
}
