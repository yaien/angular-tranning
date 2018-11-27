import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { User } from "../entities";

@Injectable({
  providedIn: "root"
})
export class DbService extends Dexie {
  users: Dexie.Table<User, number>;

  constructor() {
    super("todos");
    this.version(1).stores({
      users: "++id, email"
    });
  }
}
