import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { RegisterPayload } from "../../entities/user";
import { AuthService } from "src/app/logic/auth.service";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  model = {} as RegisterPayload;
  status: string;
  @Output() registred = new EventEmitter();

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  /**
   * Expresion para validar la confirmacion de contraseña
   */
  get confirmPattern() {
    return new RegExp(`^${this.model.password}$`).source;
  }

  async onSubmit() {
    try {
      await this.auth.register(this.model);
      this.registred.emit();
    } catch (e) {
      this.status = e.message;
    }
  }
}
