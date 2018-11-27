import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TaskFormComponent } from "./task-form/task-form.component";
import { ProfileBasicComponent } from "./profile-basic/profile-basic.component";
import { ProfilePasswordComponent } from "./profile-password/profile-password.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskCompleteComponent } from "./task-complete/task-complete.component";

@NgModule({
  imports: [CommonModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    TaskFormComponent,
    ProfileBasicComponent,
    ProfilePasswordComponent,
    TasksComponent,
    TaskCompleteComponent
  ],
  exports: [
    LoginFormComponent,
    TaskFormComponent,
    ProfileBasicComponent,
    ProfilePasswordComponent,
    TasksComponent,
    TaskCompleteComponent
  ]
})
export class CoreModule {}
