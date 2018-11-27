import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { CoreModule } from "../core/core.module";
import { TasksComponent } from "./tasks/tasks.component";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule],
  declarations: [
    HomeComponent,
    RegisterComponent,
    TasksComponent,
    ProfileComponent
  ]
})
export class PagesModule {}
