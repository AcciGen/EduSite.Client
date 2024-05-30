import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-delete',
  templateUrl: './question-delete.component.html',
  styleUrls: ['./question-delete.component.scss']
})
export class QuestionDeleteComponent {
  private apiUrl = 'https://edu-api.tohirjon.uz/api/Question';
  questions: any[] = [];
  selectedQuestionId: string | null = null;
  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetAllQuestions`);
  }

  deleteQuestion(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteQuestion/${id}`);
  }



  ngOnInit(): void {
    this.GetAllQuestions();
  }

  GetAllQuestions(): void {
    this.getAllQuestions().subscribe((data: any[]) => {
      this.questions = data;
    });
  }

  DeleteQuestion(): void {
    if (this.selectedQuestionId) {
      this.deleteQuestion(this.selectedQuestionId).subscribe(() => {
        this.getAllQuestions();  // Refresh the list after deletion
      });
    }
  }
}
