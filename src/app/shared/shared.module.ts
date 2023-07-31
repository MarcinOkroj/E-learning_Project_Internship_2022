import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './material/app.material.module';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { ToastrModule } from 'ngx-toastr';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NoPermissionComponent } from './no-permission/no-permission.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TilesComponent } from './components/tile/tile.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    TilesComponent,
    NoPermissionComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    AppMaterialModule,
    AvatarModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    AppMaterialModule,
    ConfirmationDialogComponent,
    ToastrModule,
    AvatarModule,
    TilesComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
})
export class SharedModule {}
