import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrl: './course-update.component.scss'
})
export class CourseUpdateComponent {
  courseName: string = '';
  description: string = '';
  totalTime: number = 0;
  price: number = 0;
  language: string = '';
  teacherName: string = '';
  couponId: string = '';
  categoryId: string = '';
  coupons: any[] = [];
  categories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCoupons();
    this.fetchCategories();
  }

  fetchCoupons(): void {
    this.http.get<any[]>('https://edu-api.tohirjon.uz/api/Coupon/all').subscribe((res) => {
      this.coupons = res;
    });
  }

  fetchCategories(): void {
    this.http.get<any[]>('https://edu-api.tohirjon.uz/api/Category/GetCategories').subscribe((res) => {
      this.categories = res;
    });
  }

  updateCourse(): void {
    const updatedCourse = {
      id: 'course_id_to_update', // You need to provide the ID of the course you want to update
      courseName: this.courseName,
      description: this.description,
      totalTime: this.totalTime,
      price: this.price,
      language: this.language,
      teacherName: this.teacherName,
      couponId: this.couponId,
      categoryId: this.categoryId,
    };

    this.http.put('https://edu-api.tohirjon.uz/api/Course/UpdateCourse', updatedCourse).subscribe((res) => {
      console.log('Course updated successfully:', res);
    }, (error) => {
      console.error('Error updating course:', error);
    });
  }
}
