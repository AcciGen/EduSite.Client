import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>("https://cms-api.tohirjon.uz/api/Quiz/GetAllQuizes")
  }

}
