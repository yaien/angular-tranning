import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { CoreModule } from "../core/core.module";
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [HomeComponent, RegisterComponent, TasksComponent]
})
export class PagesModule {}
