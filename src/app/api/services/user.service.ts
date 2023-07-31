import { UserPostInterface } from './../../shared/interface/users.interfaces';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  protected basePath = environment.apiPath;
  public defaultHeaders = new HttpHeaders();

  constructor(protected http: HttpClient) {
    this.defaultHeaders = this.defaultHeaders.append('Accept', 'application/json');
    this.defaultHeaders = this.defaultHeaders.append('Content-Type', 'application/json');
  }

  public getUsers(): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.get<any>(`${this.basePath}/`, { headers });
  }

  public postUsers(body:UserPostInterface): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.post<any>(`${this.basePath}/`, body, { headers });
  }

  //not implemented in the DB yet so not sure what type body would be
  public putUsers(body:UserPostInterface): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.put<any>(`${this.basePath}/`, body, { headers });
  }
}
