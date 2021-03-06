import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { CoreModule } from "../components/core.module";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule, FormsModule],
  declarations: [HomeComponent, ProfileComponent]
})
export class PagesModule {}
