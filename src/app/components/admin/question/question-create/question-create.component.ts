import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {
  private baseUrl = 'https://edu-api.tohirjon.uz/api';

  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Course/GetAllCourses`);
  }

  createQuestion(question: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Question/CreateQuestion`, question);
  }

  courses: any[] = [];
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
  }

  submit(): void {
    if (this.selectedCourseId && this.question && this.correctOption) {
      const options = [
        { text: this.optionA, isCorrect: this.optionA === this.correctOption },
        { text: this.optionB, isCorrect: this.optionB === this.correctOption },
        { text: this.optionC, isCorrect: this.optionC === this.correctOption }
      ];

      const question = {
        quizModelId: this.selectedCourseId,
        question: this.question,
        optionA: this.optionA,
        optionB: this.optionB,
        optionC: this.optionC,
        correctOption: this.correctOption,
        exp: this.exp
      };

      this.createQuestion(question).subscribe(
        (response) => {
          console.log('Question created successfully', response);
          this.resetForm();
        },
        (error) => {
          console.error('Error creating question', error);
        }
      );
    } else {
      console.error('Please fill in all fields');
    }
  }

  resetForm(): void {
    this.selectedCourseId = null;
    this.question = '';
    this.optionA = '';
    this.optionB = '';
    this.optionC = '';
    this.correctOption = '';
    this.exp = 0;
  }
}
