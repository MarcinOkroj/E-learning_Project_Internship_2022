import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { UserAttribiutes } from 'src/app/shared/interface/users.interfaces';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {
  @ViewChild('passoword') passwordInput!: ElementRef;
  @ViewChild('passwordSwitch') passwordSwitch!: MatSlideToggle;
  isChecked = false;
  form!: FormGroup;
  //will be removed when connected to API
  companyId: UserAttribiutes[] = [
    {
      id: 1,
      name: 'userCompany1',
    },
    {
      id: 2,
      name: 'userCompany2',
    },
    {
      id: 3,
      name: 'userCompany3',
    },
  ];
  authority: UserAttribiutes[] = [
    {
      id: 1,
      name: 'userRole1',
    },
    {
      id: 2,
      name: 'userRole2',
    },
    {
      id: 3,
      name: 'userRole3',
    },
  ];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();

    //checks if adding user
    if (this.data.user === undefined) {
      this.form.addControl(
        'password',
        new FormControl('', Validators.required)
      );
      this.form.addControl('switch', new FormControl(''));
    } else {
      this.form.patchValue(this.data.user);
    }
  }

  initForm(): UntypedFormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      companyId: ['', Validators.required],
      authority: ['', Validators.required],
    });
  }

  save() {
    console.log(this.data);
    //checks if adding user
    if (this.data.user === undefined) {
      //updates the forms value according to value of input and slider
      this.form.controls['password'].setValue(
        this.passwordInput.nativeElement.value
      );
      this.form.controls['switch'].setValue(this.passwordSwitch.checked);
    }

    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }
    this.dialogRef.close(this.form.value);
  }

  //generate random password
  randomPassword() {
    //for now just numbers, later will add script to make password according to spec
    const password = Math.floor(Math.random() * 1000000000).toString();
    this.passwordInput.nativeElement.value = password;
    this.form.controls['password'].setValue(password);
  }

  sliderChanged() {
    if (this.isChecked === false) {
      this.randomPassword();
      this.passwordInput.nativeElement.disabled = true;
    } else {
      this.passwordInput.nativeElement.value = '';
      this.passwordInput.nativeElement.disabled = false;
    }
    this.isChecked = !this.isChecked;
  }
}
