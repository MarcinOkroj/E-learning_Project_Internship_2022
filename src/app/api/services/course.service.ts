import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {

  protected basePath = environment.apiPath;
  public defaultHeaders = new HttpHeaders();

  constructor(protected http: HttpClient) {
    this.defaultHeaders = this.defaultHeaders.append('Accept', 'application/json');
    this.defaultHeaders = this.defaultHeaders.append('Content-Type', 'application/json');
  }

  public getCourses(): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.get<any>(`${this.basePath}/courses/`, { headers });
  }

  public saveCourse(course: any): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.post<any>(`${this.basePath}/courses/`, { headers });
  }

  public editCourse(course: any): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.put<any>(`${this.basePath}/courses/`, { headers });
  }

  public deleteCourse(id: number): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.delete<any>(`${this.basePath}/courses/`, { headers });
  }

}
