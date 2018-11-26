import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PagesModule, HomeComponent, RegisterComponent } from "../pages";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  declarations: []
})
export class RoutingModule {}
