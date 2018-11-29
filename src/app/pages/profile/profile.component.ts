import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.user = { ...this.auth.value };
  }
}
