import { Injectable } from "@angular/core";
import Dexie from "dexie";
import { User, Task } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class DbService extends Dexie {
  users: Dexie.Table<User, number>;
  tasks: Dexie.Table<Task, number>;

  constructor() {
    super("todos");
    this.version(1).stores({
      users: "++id, email",
      tasks: "++id, userId, limit"
    });
  }
}
