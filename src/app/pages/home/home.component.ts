import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/logic/auth.service";
import { Observable } from "rxjs";
import { User } from "src/app/entities";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  user: Observable<User>;

  constructor(auth: AuthService) {
    this.user = auth.user;
  }

  ngOnInit() {}
}
