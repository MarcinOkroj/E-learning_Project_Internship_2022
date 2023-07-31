import { LanguageInterface } from './../../shared/interface/language.interface';
import { AuthService } from './../../core/services/auth.service';
import { Component, OnDestroy, OnInit,  ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { filter, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ResetPasswordData } from 'src/app/shared/interface/login.interface';
import { comparePassword } from '../../shared/validators/comparePasswords';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectChange } from '@angular/material/select';
import { PreferredLanguageService } from 'src/app/core/services/preferred-language.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ResetPasswordComponent implements OnInit, OnDestroy {
  form: UntypedFormGroup;
  token: string = '';
  tokenName: string = 'token';
  subscription = new Subscription();
  selectedLanguage: string = 'pl';

   //TOASTR
  toastrTextSuccess = 'Password has been changed';
  toastrTextError = 'Błąd zmiany hasła';
  toastrHeader = 'Success';

  constructor(
    private activeRouter: ActivatedRoute,
    private toastr: ToastrService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService,
    private preferredLanguage: PreferredLanguageService
  ) {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.activeRouter.queryParams
        .pipe(filter((val) => val[this.tokenName]))
        .subscribe((val) => {
          this.token = val[this.tokenName];
        })
    );

    let preferredLanguage = this.preferredLanguage.getPreferredLanguage();
    this.translate.use(preferredLanguage);
  }

  languages: LanguageInterface[] = [
    {value: 'pl', viewValue: 'Polski'},
    {value: 'en', viewValue: 'English'},
  ];

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  initForm(): UntypedFormGroup {
    return this.fb.group(
      {
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$'
            ),
          ]),
        ],
        confirmPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$'
            ),
          ]),
        ],
      },
      {
        validator: comparePassword,
      }
    );
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    const newPassword: ResetPasswordData = {
      password: this.form.controls['password'].value,
    };
    //TOASTR TRANSLATE!!!!

    this.authService.changePassword(newPassword).subscribe(
      (next) => {
        this.toastr.success(this.translate.instant('ResetPassword.PasswordHasBeenChanged'));
        this.router.navigateByUrl('/login');
      },
      (err) => {
        this.toastr.error(this.toastrTextError);
      }
    );
  }

  languageSelected(event: MatSelectChange) {
    const selectedLanguage = event.value;
    this.translate.use(selectedLanguage);
    this.preferredLanguage.savePreferredLanguage(selectedLanguage);
   }
}
