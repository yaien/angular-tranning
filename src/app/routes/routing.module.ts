import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesModule, HomeComponent, ProfileComponent } from "../pages";
import { AuthRouteService } from "./auth-route.service";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "HomePage" } },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthRouteService],
    data: { animation: "ProfilePage" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  declarations: [],
  providers: [AuthRouteService]
})
export class RoutingModule {}
