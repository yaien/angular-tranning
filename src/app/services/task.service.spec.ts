import { TestBed } from "@angular/core/testing";

import { TaskService } from "./task.service";
import { DbService } from "./db.service";

describe("TaskService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [DbService]
    })
  );

  it("should be created", () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });
});
