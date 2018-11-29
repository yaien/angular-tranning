import { Injectable } from "@angular/core";
import { User, Task } from "../interfaces";
import { DbService } from "./db.service";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private db: DbService) {}

  /**
   * Retorna tareas correspondientes al usuario
   * @param user
   */
  find(userId: number) {
    return this.db.tasks.where({ userId }).toArray();
  }

  /**
   * Crear una tarea
   * @param payload
   */
  async create(payload: Task): Promise<Task> {
    let id = await this.db.tasks.add(payload);
    let result = { ...payload, id };
    return result;
  }

  async update(id: number, task: Task) {
    await this.db.tasks.update(id, task);
    return this.db.tasks.get(id);
  }
}
