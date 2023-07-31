import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing';
import { SharedModule } from '../shared/shared.module';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    AvatarModule
  ]
})
export class ProfileModule { }

