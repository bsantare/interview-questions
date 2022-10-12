let someExpensivelyCalculatedValue: string;

export const sleep = async (sleepMs: number) => {
  return new Promise(resolve => setTimeout(resolve, sleepMs));
};

const doSomethingExpensive = async (): Promise<string> => {
  const expensiveValue = new Date(Date.now() + Math.random() * 5000).toISOString();
  await sleep(250);
  return expensiveValue;
};

/**
 * This function lazily initializes (caches) an expensive value to calculate.  The provided implementation is not
 * concurrency-friendly in the sense that concurrent execution of async calls to `calculateOrGetExpensiveValue`
 * will cause the expensive value to be calculated multiple times if it has not yet been cached.
 *
 * Modify this code so that the expensive value is only calculated once regardless of how many concurrent
 * async calls are made to this function.  You _may not_ utilize external libraries to solve this issue.
 *
 * The accompanying test case will fail with this implementation.  Your augmented implementation should make
 * the test case pass :)
 */
export const calculateOrGetExpensiveValue = async () => {
    if (!someExpensivelyCalculatedValue) {
        console.info('Cache miss - calculating expensive value');
        someExpensivelyCalculatedValue = await doSomethingExpensive();
    }
    return someExpensivelyCalculatedValue;
};

