import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { RouterOutlet } from "@angular/router";
import { slideInAnimations } from "./animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideInAnimations]
})
export class AppComponent implements OnInit {
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

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
