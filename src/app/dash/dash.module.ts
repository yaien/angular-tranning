import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterComponent } from "./master/master.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { GravatarModule } from "ngx-gravatar";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  exports: [MasterComponent],
  imports: [CommonModule, RouterModule, GravatarModule, NgbModule],
  declarations: [MasterComponent, NavbarComponent]
})
export class DashModule {}
