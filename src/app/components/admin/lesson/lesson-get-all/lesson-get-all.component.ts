import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lesson-get-all',
  templateUrl: './lesson-get-all.component.html',
  styleUrl: './lesson-get-all.component.scss'
})
export class LessonGetAllComponent {
  private apiUrl1 = 'https://edu-api.tohirjon.uz/api/Course/GetAllCourses';
  private lessonsUrl = 'https://edu-api.tohirjon.uz/api/Lesson/GetAllLessons';
  private apiUrl = 'https://edu-api.tohirjon.uz';


  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl1);
  }

  getLessonsByCourseId(courseId: string): Observable<any> {
    return this.http.get<any>(`${this.lessonsUrl}?courseId=${courseId}`);
  }



  getVideoPath(videoId: string): Observable<{ videoPath: string }> {

    return this.http.get<{ videoPath: string }>(`${this.apiUrl}/${videoId}`);
  }

  courses: any[] = [];
  selectedCourseId: string | null = null;
  lessons: any[] = [];
  selectedLesson: any = null;


  ngOnInit(): void {
    this.getAllCourses().subscribe((res) => {
      this.courses = res;
    });
  }

  onCourseSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCourseId = selectElement.value;
    if (this.selectedCourseId) {
      this.getLessonsByCourseId(this.selectedCourseId).subscribe((res) => {
        this.lessons = res;
        this.selectedLesson = null; // Reset selected lesson
      });
    }
  }

  onLessonSelect(lesson: any): void {
    this.selectedLesson = this.selectedLesson === lesson ? null : lesson;
  }

  onDownloadVideo(videoId: string): void {
    this.getVideoPath(videoId).subscribe(
      (data) => {
        const videoPath = data.videoPath;
        this.downloadFile(videoPath);
      },
      (error) => {
        console.error('There was an error with the fetch operation:', error);
      }
    );
  }

  private downloadFile(videoPath: string): void {
    const link = document.createElement('a');
    link.href = videoPath;
    link.download = videoPath.split('/').pop()!;
    document.body.appendChild(link); // Добавляем ссылку в DOM
    link.click(); // Имитация клика для скачивания
    document.body.removeChild(link); // Удаляем ссылку из DOM
  }
}
