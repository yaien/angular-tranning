import { LogicModule } from './logic.module';

describe('LogicModule', () => {
  let logicModule: LogicModule;

  beforeEach(() => {
    logicModule = new LogicModule();
  });

  it('should create an instance', () => {
    expect(logicModule).toBeTruthy();
  });
});
