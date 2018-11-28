import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { User, Task } from "src/app/entities";
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
  submited = new EventEmitter<Task>();

  @ViewChild("content")
  content: ElementRef;

  model = {} as Task;

  ref: NgbModalRef;

  constructor(private modal: NgbModal) {}

  open(task?: Task) {
    this.model = task ? { ...task } : ({} as Task);
    this.ref = this.modal.open(this.content);
  }

  close() {
    this.ref.close();
  }

  reset() {
    this.model = {} as Task;
  }
}
