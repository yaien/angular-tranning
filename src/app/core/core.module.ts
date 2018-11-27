import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TaskFormComponent } from "./task-form/task-form.component";
import { ProfileBasicComponent } from "./profile-basic/profile-basic.component";
import { ProfilePasswordComponent } from "./profile-password/profile-password.component";

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    TaskFormComponent,
    ProfileBasicComponent,
    ProfilePasswordComponent
  ],
  exports: [
    LoginFormComponent,
    TaskFormComponent,
    ProfileBasicComponent,
    ProfilePasswordComponent
  ]
})
export class CoreModule {}
