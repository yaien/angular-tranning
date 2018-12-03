import { TestBed } from "@angular/core/testing";

import { ProfileService } from "./profile.service";
import { AuthService } from "./auth.service";
import { DbService } from "./db.service";

describe("ProfileService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [AuthService, DbService]
    })
  );

  it("should be created", () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
});
