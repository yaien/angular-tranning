import { Component, OnInit, ViewChild } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { LoginPayload } from "../../interfaces/user";
import { AuthService } from "src/app/services/auth.service";
import { RecaptchaComponent } from "ng-recaptcha";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  constructor(private modalService: NgbModal, private auth: AuthService) {}

  model = {} as LoginPayload;
  status: string;
  recaptcha: boolean;
  ref: NgbModalRef;

  @ViewChild(RecaptchaComponent)
  captcha: RecaptchaComponent;

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
      this.captcha.reset();
    }
  }
}
