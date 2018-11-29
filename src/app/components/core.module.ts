import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TaskFormComponent } from "./task-form/task-form.component";
import { ProfileBasicComponent } from "./profile-basic/profile-basic.component";
import { ProfilePasswordComponent } from "./profile-password/profile-password.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskCompleteComponent } from "./task-complete/task-complete.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MasterComponent } from "./master/master.component";
import { GravatarModule } from "ngx-gravatar";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    GravatarModule,
    RouterModule
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    TaskFormComponent,
    ProfileBasicComponent,
    ProfilePasswordComponent,
    TasksComponent,
    TaskCompleteComponent,
    NavbarComponent,
    MasterComponent
  ],
  exports: [
    LoginFormComponent,
    TaskFormComponent,
    ProfileBasicComponent,
    ProfilePasswordComponent,
    TasksComponent,
    TaskCompleteComponent,
    NavbarComponent,
    MasterComponent
  ]
})
export class CoreModule {}
