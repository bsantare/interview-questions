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
    const promiseResults = await Promise.all([...Array(5)].map(() => calculateOrGetExpensiveValue()));

    const expected = [...Array(5)].map(() => promiseResults[0]);
    // console.log(`Expected: ${JSON.stringify(expected, null, 2)} Received: ${JSON.stringify(promiseResults, null, 2)}`)

    expect(promiseResults).toEqual(expected);
  });
});
