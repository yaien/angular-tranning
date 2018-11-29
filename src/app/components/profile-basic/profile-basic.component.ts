import { Component, OnInit } from "@angular/core";
import { BasicProfile, Status } from "src/app/interfaces";
import { AuthService } from "src/app/services/auth.service";
import { ProfileService } from "src/app/services/profile.service";

@Component({
  selector: "app-profile-basic",
  templateUrl: "./profile-basic.component.html",
  styleUrls: ["./profile-basic.component.css"]
})
export class ProfileBasicComponent implements OnInit {
  basic = {} as BasicProfile;
  status = null;

  constructor(private auth: AuthService, private profile: ProfileService) {}

  ngOnInit() {
    let user = this.auth.value;
    this.basic = { email: user.email, name: user.name };
  }

  async submit() {
    try {
      await this.profile.updateBasic(this.basic);
      this.status = { success: true, message: "Informacion Actualizada" };
    } catch (e) {
      this.status = { success: false, message: e.message };
    }
  }
}
