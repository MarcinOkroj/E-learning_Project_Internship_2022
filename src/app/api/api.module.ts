import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { CompanyService } from './services/company.service';
import { CourseService } from './services/course.service';
import { ApiService } from './api.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ApiService,
    UserService,
    CompanyService,
    CourseService
  ]
})
export class ApiModule {
  //
}
