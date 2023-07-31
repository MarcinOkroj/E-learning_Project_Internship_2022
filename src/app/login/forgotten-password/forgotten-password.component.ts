import { LanguageInterface } from './../../shared/interface/language.interface';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectChange } from '@angular/material/select';
import { PreferredLanguageService } from 'src/app/core/services/preferred-language.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ForgottenPasswordComponent implements OnInit {
  showForgottenPasswordForm: boolean = true;
  emailFormControl = new UntypedFormControl('', [Validators.email, Validators.required]);
  selectedLanguage: string = 'pl';

  constructor(
    private translate: TranslateService,
    private preferredLanguage: PreferredLanguageService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.preferredLanguage.getPreferredLanguage();
    this.translate.use(this.selectedLanguage);
  }

  languages: LanguageInterface[] = [
    {value: 'pl', viewValue: 'Polski'},
    {value: 'en', viewValue: 'English'},
  ];

  sentEmail(): void {
    if(!this.emailFormControl.valid) {
      return;
    }
    this.showForgottenPasswordForm = false;
  }

  languageSelected(event: MatSelectChange) {
    this.selectedLanguage = event.value;
    this.translate.use(this.selectedLanguage);
    this.preferredLanguage.savePreferredLanguage(this.selectedLanguage);
   }
}
