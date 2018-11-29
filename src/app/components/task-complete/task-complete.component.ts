import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "src/app/interfaces";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-task-complete",
  templateUrl: "./task-complete.component.html",
  styleUrls: ["./task-complete.component.css"]
})
export class TaskCompleteComponent implements OnInit {
  @Input()
  task: Task;

  @Output()
  completed = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  async complete() {
    let task = await this.taskService.update(this.task.id, {
      completed: true
    } as Task);
    this.completed.emit(task);
  }
}
