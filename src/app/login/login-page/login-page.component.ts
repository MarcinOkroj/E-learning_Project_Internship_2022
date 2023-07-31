import { LoggedUserInterface } from './../../shared/interfaces/logged.user.interface';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import jwt_decode from "jwt-decode";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectChange } from '@angular/material/select';
import { PreferredLanguageService } from 'src/app/core/services/preferred-language.service';
import { LanguageInterface } from './../../shared/interface/language.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {
  form: UntypedFormGroup = this.initForm();
  selectedLanguage: string = 'pl';

  constructor(
    private fb: UntypedFormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService,
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

  initForm(): UntypedFormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.form.markAllAsTouched();
    this.auth
      .login(this.form.value)
      .pipe(
        switchMap((token) => {
          localStorage.setItem('refreshToken', token.jwtRefreshToken);
          return this.auth.refreshToken(token);
        })
      )
      .subscribe(
        (next) => {
          const userToken = next.jwtToken;
          const user: LoggedUserInterface = jwt_decode(userToken);
          this.auth.setUser(user);
          localStorage.setItem('token', next.jwtToken);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['app/companies']);
        },
        (err) => {
          this.toastr.error(this.translate.instant('LoginPage.IncorrectData'));
        }
      );
  }


 languageSelected(event: MatSelectChange) {
  this.selectedLanguage = event.value;
  this.translate.use(this.selectedLanguage);
  this.preferredLanguage.savePreferredLanguage(this.selectedLanguage);
 }
}
