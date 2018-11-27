import { Component, OnInit } from "@angular/core";
import { AuthService } from "./logic/auth.service";
import { timingSafeEqual } from "crypto";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "internal";
  ready = false;

  constructor(private auth: AuthService) {}

  async ngOnInit() {
    try {
      await this.auth.init();
    } catch (e) {
      console.error(e);
    } finally {
      this.ready = true;
    }
  }
}
