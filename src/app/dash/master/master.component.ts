import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/logic/auth.service";
import { Observable } from "rxjs";
import { User } from "src/app/entities";

@Component({
  selector: "app-master",
  templateUrl: "./master.component.html",
  styleUrls: ["./master.component.css"]
})
export class MasterComponent {
  user: Observable<User>;

  constructor(private auth: AuthService) {
    this.user = auth.user;
  }

  logout() {
    this.auth.logout();
  }
}
