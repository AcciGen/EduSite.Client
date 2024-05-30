import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseModel } from '../../models/response-model';
import { Category } from '../../models/category';
import { Coupon } from '../../models/coupon';
import { Course } from '../../models/course';
import { LessonModel } from '../../models/lesson-model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = 'https://edu-api.tohirjon.uz/api/';
  
  constructor(private http: HttpClient) {}

  CreateCategory(name: string): Observable<ResponseModel> {
    return this.http
      .post<ResponseModel>(this.apiUrl + 'Category/CreateCategory', { name: name })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  UpdateCategory(id: number, name: string): Observable<ResponseModel> {
      return this.http.put<ResponseModel>(this.apiUrl + 'Category/UpdateCategory' + id, { name: name }).pipe(
        map((response) => {
          return response;
        })
      )
  }

  CreateCoupon(
    couponCode: string,
    discount: number
  ): Observable<ResponseModel> {
    return this.http
      .post<ResponseModel>(this.apiUrl + 'Coupon', {
        couponCode: couponCode,
        discount: discount,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  GetAllCoupons(): Observable<any> {
    return this.http.get<Coupon>(this.apiUrl + 'Coupon/all').pipe(
      map((response) => {
        return response;
      })
    );
  }
  deleteCoupon(couponId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}Coupon/${couponId}`).pipe(
      map((response) => {
        return response;
      })
    );
  }
  getCouponById(couponId: string): Observable<Coupon> {
    return this.http.get<Coupon>(`${this.apiUrl}Coupon/${couponId}`).pipe(
      map((response) => {
        return response;
      })
    );
  }
  updateCoupon(couponId: string, newCouponCode: string, newDiscount: number): Observable<ResponseModel> {
    return this.http.put<ResponseModel>(`${this.apiUrl}${couponId}`, { couponCode: newCouponCode, discount: newDiscount}).pipe(
      map((response) => {
        return response;
      })
    );
  }
  

    
  GetAllCategorys(): Observable<any> {
    return this.http.get<Category>(this.apiUrl + 'Category/GetCategories').pipe(
      map((response) => {
        return response;
      })
    );
  }

  GetCategoryById(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Category/GetCategory/' + id).pipe(
      map((response) => {
        return response;
      })
    )
  }

  DeleteCategory(id: string): Observable<any> {
    const patch = [{ "op": "remove", "path": `/Category/DeleteCategory/${id}` }];
    return this.http.patch<any>(this.apiUrl, patch, { headers: { 'Content-Type': 'application/json-patch+json' }}).pipe(
      map((response) => {
        return response;
      })
    );
  }
  
  
  

  CreateCourse(data: Course): Observable<ResponseModel> {
    console.log(data);
    console.log('keldi service ga');
    return this.http
      .post<ResponseModel>(this.apiUrl + 'Course/CreateCourse', data)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  GetAllCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Course/GetAllCourses')
  }

  getCourseById(CourseId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Course/GetCourseById?id=${CourseId}`)
  }

  CreateLesson(data: LessonModel): Observable<any> {
    data.CourseId = 'dd62fbd0-df18-4e9f-a80d-a94993a515f9';
    return this.http.post(this.apiUrl + 'Lesson/CreateLesson', data).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
