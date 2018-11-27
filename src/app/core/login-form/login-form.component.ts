import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { LoginPayload } from "../../entities/user";
import { AuthService } from "src/app/logic/auth.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  constructor(private modalService: NgbModal, private auth: AuthService) {}

  model = {} as LoginPayload;
  status: string;
  ref: NgbModalRef;

  ngOnInit() {}

  open(content) {
    this.ref = this.modalService.open(content);
  }

  close() {
    this.ref.close();
  }

  async submit() {
    try {
      await this.auth.login(this.model);
    } catch (e) {
      this.status = e.message;
    }
  }
}
