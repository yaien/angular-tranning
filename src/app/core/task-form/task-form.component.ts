import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { User, Task } from "src/app/entities";
import { TaskService } from "src/app/logic/task.service";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"]
})
export class TaskFormComponent {
  @Input()
  user: User;

  @Output()
  created = new EventEmitter<Task>();

  model = {} as Task;

  ref: NgbModalRef;

  constructor(private taskService: TaskService, private modal: NgbModal) {}

  async submit() {
    this.model.userId = this.user.id;
    try {
      let task = await this.taskService.create(this.model);
      this.created.emit(task);
      this.model = {} as Task;
      this.close();
    } catch (e) {
      console.error(e);
    }
  }

  open(content) {
    this.ref = this.modal.open(content);
  }

  close() {
    this.ref.close();
  }
}
