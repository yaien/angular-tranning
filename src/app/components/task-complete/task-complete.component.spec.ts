import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskCompleteComponent } from "./task-complete.component";
import { Task } from "src/app/interfaces";
import { By } from "@angular/platform-browser";

describe("TaskCompleteComponent", () => {
  let component: TaskCompleteComponent;
  let fixture: ComponentFixture<TaskCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCompleteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCompleteComponent);
    component = fixture.componentInstance;
    component.task = { completed: false } as Task;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("show display complete button", () => {
    let button = fixture.debugElement.query(By.css("span.badge.badge-primary"));
    expect(button).toBeTruthy();
  });
});
