import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginFormComponent, RegisterFormComponent],
  exports: [LoginFormComponent]
})
export class CoreModule {}
