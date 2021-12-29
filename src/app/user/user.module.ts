import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { AppMaterialModule } from '../app-material.module'
import { FieldErrorModule } from '../user-controls/field-error/field-error.module'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component'
import { UserMaterialModule } from './user-material.module'
import { UserRoutingModule } from './user-routing.module'
import { ViewUserComponent } from './view-user/view-user.component'

@NgModule({
  declarations: [ProfileComponent, LogoutComponent, ViewUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    AppMaterialModule,
    UserMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FieldErrorModule,
  ],
})
export class UserModule {}
