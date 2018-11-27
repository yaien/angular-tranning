import { Injectable, ComponentFactoryResolver } from "@angular/core";
import { AuthService } from "./auth.service";
import { DbService } from "./db.service";
import { BasicProfile } from "../entities";
import * as md5 from "md5";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private auth: AuthService, private db: DbService) {}

  getId() {
    return this.auth.value.id;
  }

  async updateBasic(payload: BasicProfile) {
    let id = this.getId();
    let users = await this.db.users.where({ email: payload.email }).toArray();
    users = users.filter(user => user.id !== id);
    if (users.length) throw Error("Correo ya registrado");
    await this.db.users.update(id, payload);
    await this.auth.reload();
  }

  async updatePassword(newPassword: string, actualPassword: string) {
    let password = md5(newPassword);
    let id = this.getId();
    if (this.auth.value.password !== md5(actualPassword)) {
      throw Error("Contraseña Incorrecta");
    }
    await this.db.users.update(id, { password });
    await this.auth.reload();
  }
}
