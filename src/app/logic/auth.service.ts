import { Injectable } from "@angular/core";
import { DbService } from "./db.service";
import { LoginPayload, User, RegisterPayload } from "../entities";
import { BehaviorSubject } from "rxjs";
import * as md5 from "md5";
import { SessionService } from "./session.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private behavior = new BehaviorSubject<User>(null);

  constructor(private db: DbService, private session: SessionService) {}

  get value() {
    return this.behavior.getValue();
  }

  get user() {
    return this.behavior.asObservable();
  }

  async login({ email, password }: LoginPayload) {
    let user = await this.db.users.where({ email }).first();
    if (!user) throw Error("Usuario no registrado");
    if (user.password != md5(password)) throw Error("Contraseña Incorrecta");
    this.behavior.next(user);
    this.session.set(user.id);
    return user;
  }

  async register(payload: RegisterPayload) {
    let registred = await this.db.users.where({ email: payload.email }).count();
    if (registred) throw Error("Correo ya registrado");
    let user = { ...payload, password: md5(payload.password) };
    user.id = await this.db.users.add(user);
    this.behavior.next(user);
    this.session.set(user.id);
    return user;
  }

  async init() {
    let id = this.session.get();
    if (id === null) return;

    let user = await this.db.users.get(id);
    if (!user) {
      this.session.reset();
      return;
    }

    this.behavior.next(user);
  }

  logout() {
    this.session.reset();
    this.behavior.next(null);
  }
}
