import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterComponent } from "./master/master.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { GravatarModule } from "ngx-gravatar";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  exports: [MasterComponent],
  imports: [CommonModule, RouterModule, GravatarModule],
  declarations: [MasterComponent, NavbarComponent]
})
export class DashModule {}
