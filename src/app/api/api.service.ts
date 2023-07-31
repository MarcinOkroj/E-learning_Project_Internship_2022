import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './services/user.service';
import { CompanyService } from './services/company.service';
import { CourseService } from './services/course.service'
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    protected basePath = environment.apiPath;
    public defaultHeaders = new HttpHeaders();

    constructor(protected httpClient: HttpClient) {
        //
    }

    private _userService!: UserService;

    get User(): UserService {

        if (this._userService == null) {
            this._userService = new UserService(this.httpClient);
        }
        return this._userService;
    }

    private _companyService!: CompanyService;

    get Company(): CompanyService {

        if (this._companyService == null) {
            this._companyService = new CompanyService(this.httpClient);
        }
        return this._companyService;
    }

    private _courseService!: CourseService;

    get Course(): CourseService {

        if (this._courseService == null) {
            this._courseService = new CourseService(this.httpClient);
        }
        return this._courseService;
    }
}
