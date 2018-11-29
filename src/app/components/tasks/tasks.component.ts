import { Component, OnInit, ViewChild } from "@angular/core";
import { TaskService } from "src/app/services/task.service";
import { Task, User } from "src/app/interfaces";
import { AuthService } from "src/app/services/auth.service";
import { TaskFormComponent } from "../task-form/task-form.component";
import { fadeLeft } from "src/app/animations";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
  animations: [fadeLeft]
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  user: User;
  query: string;

  @ViewChild("createForm")
  createForm: TaskFormComponent;

  @ViewChild("editForm")
  editForm: TaskFormComponent;

  constructor(private taskService: TaskService, private auth: AuthService) {}

  async ngOnInit() {
    this.user = this.auth.value;
    this.tasks = await this.taskService.find(this.user.id);
  }

  /**
   * Agrega una tarea
   * @param task
   */
  add(task: Task) {
    this.tasks.push(task);
  }

  /**
   * Cambia el formato de visualizacion de la fecha
   * @param date
   */
  locale(date: string) {
    return new Date(date).toLocaleDateString();
  }

  /**
   * Actualiza la lista de tareas
   * @param task
   */
  update(task: Task) {
    this.tasks = this.tasks.map(t => (t.id === task.id ? task : t));
  }

  /**
   * Resultados de la busqueda
   */
  get results() {
    let regex = new RegExp(this.query, "ig");
    return this.tasks.filter(t => regex.test(t.name));
  }

  /**
   * Editar Tarea
   */
  async edit(task: Task) {
    try {
      let updatedTask = await this.taskService.update(task.id, task);
      this.update(updatedTask);
      this.editForm.close();
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Crear tarea
   */
  async create(task: Task) {
    task.userId = this.user.id;
    try {
      let newTask = await this.taskService.create(task);
      this.tasks.push(newTask);
      this.createForm.close();
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Elimina la tarea
   * @param task
   */
  async destroy(task: Task) {
    await this.taskService.delete(task.id);
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
