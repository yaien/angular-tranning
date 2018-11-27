import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/logic/task.service";
import { Task, User } from "src/app/entities";
import { timingSafeEqual } from "crypto";
import { AuthService } from "src/app/logic/auth.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  user: User;

  constructor(private taskService: TaskService, private auth: AuthService) {}

  async ngOnInit() {
    this.user = this.auth.value;
    this.tasks = await this.taskService.find(this.user.id);
  }

  add(task: Task) {
    this.tasks.push(task);
  }

  locale(date: string) {
    return new Date(date).toLocaleDateString();
  }
}
