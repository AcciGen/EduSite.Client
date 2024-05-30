import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.scss']
})
export class QuestionUpdateComponent implements OnInit {
  private baseUrl = 'https://edu-api.tohirjon.uz/api';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Course/GetAllCourses`);
  }

  getQuestionById(questionId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/Question/GetQuestionById/${questionId}`);
  }

  updateQuestion(question: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/Question/UpdateQuestion/${question.id}`, question);
  }

  courses: any[] = [];
  questionId: string | null = null;
  selectedCourseId: string | null = null;
  question: string = '';
  optionA: string = '';
  optionB: string = '';
  optionC: string = '';
  correctOption: string = '';
  exp: number = 0;

  ngOnInit(): void {
    this.getAllCourses().subscribe((data: any) => {
      this.courses = data;
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.questionId = id;
        this.loadQuestion(id);
      }
    });
  }

  loadQuestion(id: string): void {
    this.getQuestionById(id).subscribe((data: any) => {
      this.selectedCourseId = data.quizModelId;
      this.question = data.question;
      this.optionA = data.optionA;
      this.optionB = data.optionB;
      this.optionC = data.optionC;
      this.correctOption = data.correctOption;
      this.exp = data.exp;
    });
  }

  submit(): void {
    if (this.selectedCourseId && this.question && this.correctOption && this.questionId) {
      const question = {
        id: this.questionId,
        quizModelId: this.selectedCourseId,
        question: this.question,
        optionA: this.optionA,
        optionB: this.optionB,
        optionC: this.optionC,
        correctOption: this.correctOption,
        exp: this.exp
      };

      this.updateQuestion(question).subscribe(
        (response) => {
          console.log('Question updated successfully', response);
          // Optionally reset form or provide feedback to user
        },
        (error) => {
          console.error('Error updating question', error);
        }
      );
    } else {
      console.error('Please fill in all fields');
    }
  }
}
