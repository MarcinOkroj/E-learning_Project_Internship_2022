import { Sort } from '@angular/material/sort';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyInterface } from 'src/app/shared/interfaces/company.interface';

@Injectable()
export class CompanyService {
  protected basePath = environment.apiPath;
  public defaultHeaders = new HttpHeaders();

  constructor(protected http: HttpClient) {
    this.defaultHeaders = this.defaultHeaders.append(
      'Accept',
      'application/json'
    );
    this.defaultHeaders = this.defaultHeaders.append(
      'Content-Type',
      'application/json'
    );
  }

  public filter(
    data:string,
    value:string,
    pageNumber: number = 1,
    pageSize: number = 1,
  ): Observable<CompanyInterface[]> {
    const headers = this.defaultHeaders;
      return this.http.get<any[]>(
        `${this.basePath}/company?page=${pageNumber}&size=${pageSize}&${data+"="+value}`,
        { headers }
      );
  }

  public getCompanies(
    pageNumber: number = 1,
    pageSize: number = 1,
    sort: Sort,
    filter: string = ''
  ): Observable<CompanyInterface[]> {
    const headers = this.defaultHeaders;
    console.log(filter)

      return this.http.get<any[]>(
        `${this.basePath}/company?page=${pageNumber}&size=${pageSize}&sort=${sort.active},${sort.direction}${filter? '&'+filter : ''}`,
        { headers }
      );
  }

  public addCompany(company: CompanyInterface): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.put<CompanyInterface>(`${this.basePath}/company`, company, { headers });
  }

  public deleteCompany(id: number): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.delete<any>(`${this.basePath}/company/${id}`, { headers });
  }

  public editCompany(company: CompanyInterface): Observable<any> {
    const headers = this.defaultHeaders;
    return this.http.put<any>(`${this.basePath}/company`, company, { headers });
  }
}
