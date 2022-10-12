import { calculateOrGetExpensiveValue } from './index';

describe('lazy-init tests', () => {
  beforeEach(() => {
    // Make Jest use real timers for this test case otherwise `setTimeout` will not work as expected
    jest.useRealTimers();
  });

  afterEach(() => {
    // Back to default
    jest.useFakeTimers();
  });

  it('only initializes once', async () => {
    const promiseResults = await Promise.all([calculateOrGetExpensiveValue(), calculateOrGetExpensiveValue() , calculateOrGetExpensiveValue() , calculateOrGetExpensiveValue(), calculateOrGetExpensiveValue()]);

    expect(promiseResults).toEqual([promiseResults[0], promiseResults[0], promiseResults[0], promiseResults[0], promiseResults[0]]);
  });
});
