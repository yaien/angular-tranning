import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { User } from "src/app/entities";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  @Input()
  user: User;

  @Output()
  logout = new EventEmitter();

  collapsed = false;

  constructor() {}

  ngOnInit() {}
}
