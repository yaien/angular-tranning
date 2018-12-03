import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import { DbService } from "./db.service";
import { SessionService } from "./session.service";

describe("AuthService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [DbService, SessionService]
    })
  );

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
