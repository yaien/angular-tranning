import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesModule, HomeComponent, ProfileComponent } from "../pages";
import { AuthRouteService } from "./auth-route.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthRouteService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  declarations: [],
  providers: [AuthRouteService]
})
export class RoutingModule {}
