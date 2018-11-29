import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Observable } from "rxjs";
import { User } from "src/app/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-master",
  templateUrl: "./master.component.html",
  styleUrls: ["./master.component.css"]
})
export class MasterComponent {
  user: Observable<User>;

  constructor(private auth: AuthService, private router: Router) {
    this.user = auth.user;
  }

  async logout() {
    await this.router.navigate([""]);
    this.auth.logout();
  }
}
