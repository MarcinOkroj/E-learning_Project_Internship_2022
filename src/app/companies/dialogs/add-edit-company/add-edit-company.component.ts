import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'add-edit-component',
  templateUrl: './add-edit-company.component.html',
  styleUrls: ['./add-edit-company.component.scss']
})

export class AddEditCompanyComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private api: ApiService,
              private dialogRef: MatDialogRef<AddEditCompanyComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {

    this.form = this.initForm();
    this.form.patchValue(this.data)
  }

  initForm(): FormGroup {
    return this.fb.group({
      companyId: [""],
      name: ["", Validators.required],
      address: ["", Validators.required],
      email: ["", Validators.required],
    })
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return
    }
    this.dialogRef.close(this.form.value)
  }
}


