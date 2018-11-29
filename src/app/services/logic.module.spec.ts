import { servicesModule } from "./services.module";

describe("servicesModule", () => {
  let servicesModule: servicesModule;

  beforeEach(() => {
    servicesModule = new servicesModule();
  });

  it("should create an instance", () => {
    expect(servicesModule).toBeTruthy();
  });
});
