import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TaskFormComponent } from "./task-form/task-form.component";

@NgModule({
  imports: [CommonModule, NgbModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginFormComponent, RegisterFormComponent, TaskFormComponent],
  exports: [LoginFormComponent, TaskFormComponent]
})
export class CoreModule {}
