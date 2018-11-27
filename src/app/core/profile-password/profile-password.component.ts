import { Component, OnInit } from "@angular/core";
import { PasswordProfile } from "src/app/entities";
import { ProfileService } from "src/app/logic/profile.service";

@Component({
  selector: "app-profile-password",
  templateUrl: "./profile-password.component.html",
  styleUrls: ["./profile-password.component.css"]
})
export class ProfilePasswordComponent implements OnInit {
  status = null;
  data = {} as PasswordProfile;

  constructor(private profile: ProfileService) {}

  ngOnInit() {}

  async submit() {
    try {
      await this.profile.updatePassword(
        this.data.newPassword,
        this.data.password
      );
      this.status = { success: true, message: "Informacion Actualizada" };
    } catch (e) {
      this.status = { success: false, message: e.message };
    }
  }

  /**
   * Expresion para validar la confirmacion de contraseña
   */
  get confirmPattern() {
    return new RegExp(`^${this.data.password}$`).source;
  }
}
