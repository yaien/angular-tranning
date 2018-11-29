import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { User } from "../interfaces";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { map } from "rxjs/operators";

@Injectable()
export class AuthRouteService implements CanActivate {
  user: User;

  constructor(private auth: AuthService, private router: Router) {
    auth.user.subscribe(u => {
      if (u === null) this.router.navigate([""]);
    });
  }

  canActivate() {
    return this.auth.user.pipe(map(user => (user ? true : false)));
  }
}
