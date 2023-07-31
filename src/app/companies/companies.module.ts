import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ScrollEndDirective } from '../shared/directives/scroll-end.directive';
import { AddEditCompanyComponent } from './dialogs/add-edit-company/add-edit-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CompaniesComponent,
    ScrollEndDirective,
    AddEditCompanyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CompaniesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    TranslateModule
  ],
})
export class CompaniesModule {}
